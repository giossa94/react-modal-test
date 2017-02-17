import React, { Component } from 'react';
import AutocompleteUserName from './AutocompleteUserName.js';
import UserSearchModal from './UserSearchModal.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loaded: false,
      error: false
    };
  }

  dataLoaded(){
    this.setState({
      loaded: true,
      error: false
    });
  }

  errorFetchingData(){
    this.setState({
      loaded: false,
      error: true
    });
  }

  componentWillMount(){
    const url = '/users/' + this.props.count;
    fetch(url)
      .then(response => {
        if(response.ok){
          this.dataLoaded();
          return response.json()
        }else{  
          throw new Error();
        }
      })
      .then(json => {
        this.setState({
          users: json,
        });  
        this.dataLoaded();
      })
      .catch(error => {
        this.errorFetchingData();
      })
  }

  render() {
    const loaded = this.state.loaded;
    const error = this.state.error;
    let content;

    if(error)
      content =   <UserSearchModal>
                    There was an error processing your request. Please try again later.
                  </UserSearchModal>;

    else if(loaded)
      content =   <UserSearchModal>
                      <AutocompleteUserName 
                        dataSource={this.state.users}
                        maxSearchResults={this.props.maxSearchResults} 
                      />
                  </UserSearchModal>;
    else
      content = <div>
                  Loading...
                </div>;

    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
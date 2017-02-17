import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';


export default class UserSearchModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false  
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <MuiThemeProvider>
          <div>
            <RaisedButton label="Search for users!" onTouchTap={this.handleOpen} />
            <Dialog
              title="User Search"
              actions={actions}
              modal={true}
              open={this.state.open}
            >
              {this.props.children}
            </Dialog>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
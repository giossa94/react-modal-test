import React, {Component} from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

export default class AutocompleteUserName extends Component {
  render() {
    const dataSourceConfig = {
      text: 'name',
      value: 'name',
    };

    return (
      <MuiThemeProvider>  
        <AutoComplete
          hintText="Name"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.props.dataSource}
          dataSourceConfig={dataSourceConfig}
          maxSearchResults={this.props.maxSearchResults}
        />
      </MuiThemeProvider>
    );
  }
}
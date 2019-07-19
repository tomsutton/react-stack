import React from 'react';
import logo from './logo.svg';
import './index.css';
import {Button, message} from 'antd';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  callAPI() {
    axios.get("http://localhost:9000/methods/test", {
      timeout: '500'
    })
    .then(res => {
      if(res.status == 200){
        message.success(res.data)
      }
      else {
        message.error('something\'s not ok...')
      }
    })
    .catch(err => {
      message.error('couldn\'t get response')
    })
  }
  render(){

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button type='primary' style={{marginTop: '2em'}} onClick={this.callAPI}>call API</Button>
        </header>
      </div>
    );
  }
  
}

export default App;

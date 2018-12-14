import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>第一个页面</h1>
        <Button type="primary">点击</Button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Server } from '../api/api';
import { sendReq } from '../utils/ajax';
import Header from '../components/header';
import '../App.css';



class Fuwu extends Component {
    constructor(props){
        super(props)
        this.state={
            msg:'',
        }
    }
    componentDidMount(){
        sendReq(Server,'POST').then(rep=>{   
            console.log(rep.data);
              this.setState({
                msg:rep.data.response,
              });
          })
    }
  render() {
      console.log(typeof(this.state.msg))
    return (
      <div>
          <Header msg={this.props} toptext="服务流程"/>
        <img src={this.state.msg} alt="服务流程图片" className="futu"/>
      </div>
    );
  }
}

export default Fuwu;
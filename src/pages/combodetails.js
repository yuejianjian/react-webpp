import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Header from "../components/header";
import { taodetail } from "../api/api";
import { sendReq } from "../utils/ajax";
import { withRouter } from 'react-router-dom';
import '../App.css';


class ComboDetails extends Component {
  constructor(props) {
    super(props);
    this.state={
        taocontent:'',
        flag:true,
    }
  }
  componentDidMount(){
    console.log(this.props);
    let id=this.props.match.params?this.props.match.params.id:'';
    let parm={
        id:id,
    }
    sendReq(taodetail, "POST",parm).then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          taocontent: rep.data.response.content,
        });
      }
    });
  }
  showphone=()=>{
    this.setState({
      flag:false,
    })
  }
  hiddenphone=()=>{
    this.setState({
      flag:true,
    })
  }
  makePhoneCall=()=>{
    window.location.href = "tel:4008128090";
    this.setState({
      flag:true,
    })
  }
  yuyuetaocan=()=>{
    this.props.history.replace('/appointment');
  }
  render() {
    return (
      <div>
        <Header msg={this.props} toptext="套餐包详情" />
        <div className="combodetails" dangerouslySetInnerHTML={{__html:this.state.taocontent}}>
        </div>
        <div className='comboprice'>
          <div className='left'>
            <div className='tel' onClick={this.showphone}>咨询客服</div>
          </div>
          <div className='right'>
            <div className='canguan'onClick={this.yuyuetaocan} >预约参观</div>
          </div>
        </div>
        <div className="modal-box" style={{'display':this.state.flag===true?"none":"block"}}>
          <div className="modal-body">
            <div className='tishi'>提示</div>
            <div className='tell'>是否拨打客服电话：4008128090</div>
            <div className='anniu'>
              <div className='left' onClick={this.hiddenphone}>
                <div className='quxiao'>取消</div>
              </div>
              <div className='right'>
                <div className='queding' onClick={this.makePhoneCall}>确定</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(ComboDetails);
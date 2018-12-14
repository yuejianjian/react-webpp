import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../App.css';
import Header from "../components/header";
import { anliyuyue } from "../api/api";
import { sendReq } from "../utils/ajax";


class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state={
        yuyuetu:'',
    }
  }
  componentDidMount(){
    sendReq(anliyuyue, "POST").then(rep => {
        console.log(rep.data);
        if (rep.data.response) {
          this.setState({
            yuyuetu: rep.data.response.img,
          });
        }
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <Header msg={this.props} toptext="设计师预约" />
        <div className="stylistappointment">
            <div className="stylisting">
                <img src={this.state.yuyuetu} alt=""/>
            </div>
            <div className="yuyuetijiao">
                <input className="stylistname" {...getFieldProps('name')} placeholder="请输入你的姓名" onChange={this.InputChange}/>
                <input className="stylistphone" {...getFieldProps('phone')} placeholder="请输入你的号码" onChange={this.InputChange}/>
                <Button  type="primary" onClick={this.submit} className="tijiao">submit</Button>
            </div>
        </div>
      </div>
    );
  }

}

export default createForm()(Appointment);
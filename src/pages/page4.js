import React, { Component } from 'react';
import { Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import { pricelist } from '../api/api';
import { sendReq } from '../utils/ajax';
import '../App.css';
import Footer from '../components/footer';


class Page4 extends Component {
  constructor(props){
    super(props);
    this.state ={
      showimg:'',
      fixture_type:[],
      house_type:[],
    }
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }
  componentWillMount(){
    this.getyuyuemessage();
    this.mounted = true;
  }
  componentWillUnmount(){
    this.mounted = false;
  }
  getyuyuemessage =()=>{
    sendReq(pricelist,'POST').then(rep=>{   
      console.log(rep.data.response);
      if(this.mounted){
        let yuyuedata =rep.data.response;
        this.setState({
          showimg:yuyuedata.show_img,
          fixture_type:yuyuedata.fixture_type,
          house_type:yuyuedata.house_type,
        })
      }
    })
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <div className="yuyuetu">
          <img src={this.state.showimg} alt=""/>
        </div>
        <div className="formbiao">
            <input className="mianji" {...getFieldProps('acreage')} placeholder="请输入你的房屋面积" onChange={this.InputChange}/>
            <div className="selectstyle">
              <select className="fixture" {...getFieldProps('fixture_type')}>
                {
                  this.state.fixture_type&&this.state.fixture_type.map(function(item , index){
                    return(
                      <option value={item.id} key={item.id}>{item.name}</option>
                    )
                  })
                }
              </select>
              <select className="housetype" {...getFieldProps('housetype')}>
                {
                  this.state.house_type&&this.state.house_type.map(function(item , index){
                    return(
                      <option value={item.id} key={item.id}>{item.name}</option>
                    )
                  })
                }
              </select>
            </div>
            <Button  type="primary" onClick={this.submit} className="tijiao">submit</Button>
          </div>
        <Footer />
      </div>
    );
  }
}

export default createForm()(Page4);
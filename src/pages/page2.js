import React, { Component } from 'react';
import { Button , Icon, Flex } from 'antd-mobile';
import { anlipic } from "../api/api";
import { sendReq } from "../utils/ajax";
import '../App.css';
import Footer from '../components/footer';
import incoy from '../lab/image/arrow.png'

class Page2 extends Component {
  constructor(props){
    super(props)
    this.state ={
      stylelist:[],
      housetypelist:[],
      acreagelist:[],
      datalist:[],
      style_id:0,
      house_type_id:0,
      acreage_id:0,
      tabTxt:['风格','户型','面积'],//tab文案
      tab:[true,true,true],
    }
    
  }
  downshow =(e) =>{
    console.log(e)
    let data=[true,true,true];
    let indexlist= e;
    data[indexlist]=!this.state.tab[indexlist];
    this.setState({
        tab:data,
        indexlist:indexlist,
    })
    console.log(1111);
  }
  componentDidMount(){
    sendReq(anlipic, "POST").then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          stylelist: rep.data.response.style,
          housetypelist: rep.data.response.house_type,
          acreagelist:rep.data.response.acreage,
          datalist:rep.data.response.cases,
        });
      }
    });
  }

  filter =(item) =>{
    console.log(item);
    let id = item.id;
    let txt = item.name;
    let tabTxt = this.state.tabTxt;
    if(this.state.indexlist===0){
      console.log(2222)
      tabTxt[0]=txt;
      this.setState({
        page:1,
        data:[],
        tab:[true,true,true],
        tabTxt:tabTxt,
        style_id:id
      },this.getData);
    }else if(this.state.indexlist===1){
      tabTxt[1]=txt;
      this.setState({
            page:1,
            data:[],
            tab:[true,true,true],
            tabTxt:tabTxt,
            house_type_id:id
      },this.getData);
    }else{
      tabTxt[2]=txt;
      this.setState({
          page:1,
          data:[],
          tab:[true,true,true],
          tabTxt:tabTxt,
          acreage_id:id
      },this.getData);
    }
  //数据筛选
  }
  getData =() =>{
    console.log(3333);
    console.log(this.state);
    let parm ={
      "style_id":this.state.style_id,
      "house_type_id":this.state.house_type_id,
      "acreage_id":this.state.acreage_id,
    }
    console.log(parm);
    sendReq(anlipic, "POST",parm).then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          datalist:rep.data.response.cases,
        });
      }
    });
  };
  render() {
    console.log(this.state);
    var o = this;
    let listli =this.state.stylelist&&this.state.stylelist.map(function(item,index){
      return(
        <li key={index} onClick={o.filter.bind(this, item)} className={o.state.style_id===item.id?"listactive":""}>{item.name}</li>
      )
    })
    let housetypelist =this.state.housetypelist&&this.state.housetypelist.map(function(item,index){
      return(
        <li key={index} onClick={o.filter.bind(this, item)} className={o.state.house_type_id===item.id?"listactive":""}>{item.name}</li>
      )
    })
    let acreagelist =this.state.acreagelist&&this.state.acreagelist.map(function(item,index){
      return(
        <li key={index} onClick={o.filter.bind(this, item)} className={o.state.acreage_id===item.id?"listactive":""}>{item.name}</li>
      )
    })
    let tablist = this.state.tabTxt&&this.state.tabTxt.map(function(item,index){
      return(
        <div key={index} className={'flex1 ' +(!o.state.tab[index]?'tabactive':'')} onClick={o.downshow.bind(this,index)}>
            <div className="tabname">{item}</div>
            <img src={incoy} alt=""/>
        </div>
      )
    })
    return (
      <div>
        <div className="downxiala">
          <div className="down_head">
              {tablist}
          </div>
          <div className="buttonlist" style={{'display':this.state.tab[0]===true?"none":"block"}}>
              <ul className="listul">
                  {listli}
              </ul>
          </div>
          <div className="buttonlist" style={{'display':this.state.tab[1]===true?"none":"block"}}>
              <ul className="listul">
                  {housetypelist}
              </ul>
          </div>
          <div className="buttonlist" style={{'display':this.state.tab[2]===true?"none":"block"}}>
              <ul className="listul">
                  {acreagelist}
              </ul>
          </div>
        </div>
        <div className="tulist">
          <ul className="tulistul">
          {
            this.state.datalist&&this.state.datalist.map(function(item,index){
              return(
                <li key={index}>
                  <img src={item.head_picture} alt=""/>
                  <div className="title">{item.title}</div>
                  <div className="brief">{item.brief}</div>
                </li>
              )
            })
          }
            
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Page2;
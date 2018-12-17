import React, { Component } from "react";
import { Menu, ActivityIndicator, NavBar } from "antd-mobile";
import Header from "../components/header";
import { tuchepic } from "../api/api";
import { sendReq } from "../utils/ajax";
import incoy from '../lab/image/arrow.png'
import nofind from '../lab/image/nofind.png';
import "../App.css";
class Tuce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1, //当前页码
      tabTxt:['风格','户型'],//tab文案
      tab:[true,true],
      stylelist:[],
      spacelist:[],
      style_id:0,
      house_type_id:0,  
    };
    this.jiazai = this.jiazai.bind(this);
  }
  
  downshow =(e) =>{
    console.log(e)
    let data=[true,true];
    let indexlist= e;
    data[indexlist]=!this.state.tab[indexlist];
    this.setState({
        tab:data,
        indexlist:indexlist,
    })
    console.log(1111);
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
        tab:[true,true],
        tabTxt:tabTxt,
        style:id
      },this.getPicturelist);
    }else{
      tabTxt[1]=txt;
      this.setState({
            page:1,
            data:[],
            tab:[true,true],
            tabTxt:tabTxt,
            house_type:id
      },this.getPicturelist);
    }
  }
  componentDidMount() {
    this.getPicturelist();
  }
  getPicturelist() {
    console.log(this.state);
    let parm = {
      page: this.state.page,
      style_id: this.state.style,
      room_id: this.state.house_type
    };
    console.log(parm);
    sendReq(tuchepic, "POST", parm).then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          msg: rep.data.response.picture,
          stylelist: rep.data.response.style,
          spacelist: rep.data.response.room
        });
      }
    });
  }
  jiazai() {
    let page = this.state.page + 1;
    console.log(page);
    this.setState({
      page: page
    });
    this.getPicturelist(); 
  }
  render() {
    var o = this;
    let stylelist =this.state.stylelist&&this.state.stylelist.map(function(item,index){
      return(
        <li key={index} onClick={o.filter.bind(this, item)} className={o.state.style===item.id?"listactive":""}>{item.name}</li>
      )
    })
    let spacelist =this.state.spacelist&&this.state.spacelist.map(function(item,index){
      return(
        <li key={index} onClick={o.filter.bind(this, item)} className={o.state.house_type===item.id?"listactive":""}>{item.name}</li>
      )
    })
    let tablist =this.state.tabTxt&&this.state.tabTxt.map(function(item,index){
      return(
        <div key={index} className={'flex1 ' +(!o.state.tab[index]?'tabactive':'')} onClick={o.downshow.bind(this,index)}>
            <div className="tabname">{item}</div>
            <img src={incoy} alt=""/>
        </div>
      )
    })
    return (
      <div>
        <Header msg={this.props} toptext="精美图册" />
        <div className="downxiala tucexiala">
          <div className="down_head">
              {tablist}
          </div>
          <div className="buttonlist" style={{'display':this.state.tab[0]===true?"none":"block"}}>
              <ul className="listul">
                  {stylelist}
              </ul>
          </div>
          <div className="buttonlist" style={{'display':this.state.tab[1]===true?"none":"block"}}>
              <ul className="listul">
                  {spacelist}
              </ul>
          </div>
        </div>
        <div className="getPicturelist">
          {this.state.msg &&
            this.state.msg.map(function(item, index) {
              return (
                <div className="tulist" key={index}>
                  <img src={item.head_picture} alt="" />
                  <div className="textname">
                    <span className="gg">{item.style}</span>
                    <span>{item.room}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="nodatalist" style={{'display':this.state.msg.length===0?'block':'none'}}>
          <img src={nofind} alt=""/>
          <div className="nofind-1">当前筛选无结果</div>
          <div className="nofind-2">您可以尝试筛选其他分类看看</div>
        </div>
        <div className="jiazai" onClick={this.jiazai} style={{'display':this.state.msg.length>0?'block':'none'}}>
          加载更多
        </div>
      </div>
    );
  }
}

export default Tuce;

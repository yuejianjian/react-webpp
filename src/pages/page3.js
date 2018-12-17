import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import '../App.css';
import { taocan } from "../api/api";
import { sendReq } from "../utils/ajax";
import { withRouter } from 'react-router-dom';
import Footer from '../components/footer';


class Page3 extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectid:6,
      combolist:[],     
    }
  }
  componentWillMount(){
    console.log(this.props);
    let id=this.props.location.query?this.props.location.query.id:'';
    if(id!=''){
      this.setState({
        selectid:id,
      })
    }
  }  
  componentDidMount(){
    this.IncoSelect(this.state.selectid);
  }
  IncoSelect =(e)=>{
    let parm ={
      suit_id:e,
    }
    console.log(parm);
    sendReq(taocan, "POST",parm).then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          selectid: e,
          combolist: rep.data.response.list,
        });
      }
    });
    
  }
  ComboDetails =(e)=>{
    var data = { id: e };
    var path = "/combodetails/" + data.id;
    this.props.history.push(path);
  }
  render() {
    let that = this;
    let combotao =this.state.combolist&&this.state.combolist.map(function(item,index){
      return(
        <li key={index} onClick={that.ComboDetails.bind(this,item.id)}>
          <img src={item.main_picture} alt=""/>
          <div className="tcombolisttext">{item.title}</div>
        </li>
      )
    })
    return (
      <div>
        <div className="combo">
          <div className="incolist">
            <ul>
              <li onClick={this.IncoSelect.bind(this,6)}>
                <img src={require('../lab/image/inco-11.png')} alt="" className="noselect" style={{'display':this.state.selectid===6?"none":"block"}}/>
                <img src={require('../lab/image/inco-1.png')} alt="" className="yesselect" style={{'display':this.state.selectid===6?"block":"none"}}/>
              </li>
              <li onClick={this.IncoSelect.bind(this,8)}>
                <img src={require('../lab/image/inco-22.png')} alt="" className="noselect" style={{'display':this.state.selectid===8?"none":"block"}}/>
                <img src={require('../lab/image/inco-2.png')} alt="" className="yesselect" style={{'display':this.state.selectid===8?"block":"none"}}/>
              </li>
              <li onClick={this.IncoSelect.bind(this,7)}>
                <img src={require('../lab/image/inco-33.png')} alt="" className="noselect" style={{'display':this.state.selectid===7?"none":"block"}}/>
                <img src={require('../lab/image/inco-3.png')} alt="" className="yesselect" style={{'display':this.state.selectid===7?"block":"none"}}/>
              </li>
              <li onClick={this.IncoSelect.bind(this,9)}>
                <img src={require('../lab/image/inco-44.png')} alt="" className="noselect" style={{'display':this.state.selectid===9?"none":"block"}}/>
                <img src={require('../lab/image/inco-4.png')} alt="" className="yesselect" style={{'display':this.state.selectid===9?"block":"none"}}/>
              </li>
              <li onClick={this.IncoSelect.bind(this,10)}>
                <img src={require('../lab/image/inco-55.png')} alt="" className="noselect" style={{'display':this.state.selectid===10?"none":"block"}}/>
                <img src={require('../lab/image/inco-5.png')} alt="" className="yesselect" style={{'display':this.state.selectid===10?"block":"none"}}/>
              </li>
              <li onClick={this.IncoSelect.bind(this,11)}>
                <img src={require('../lab/image/inco-66.png')} alt="" className="noselect" style={{'display':this.state.selectid===11?"none":"block"}}/>
                <img src={require('../lab/image/inco-6.png')} alt="" className="yesselect" style={{'display':this.state.selectid===11?"block":"none"}}/>
              </li>
            </ul>
          </div>
          <div className="incotext">
            <ul>
              <li>全屋整装</li>
              <li>=</li>
              <li>主材包</li>
              <li>+</li>
              <li>施工包</li>
              <li>+</li>
              <li>家具包</li>
              <li>+</li>
              <li>配饰包</li>
              <li>+</li>
              <li>个性定制</li>
            </ul>
          </div>
        </div>
        <div className="tao-tu">
          <div className="tao-list">
            <ul>
              {combotao}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default withRouter(Page3);
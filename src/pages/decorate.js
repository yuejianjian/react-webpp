import React, { Component } from "react";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import { Link } from "react-router-dom";
import { xuetanglist } from "../api/api";
import { sendReq } from "../utils/ajax";
import Header from "../components/header";
import "../App.css";
const tabs = [
  { title: "推荐", tabid: 0 },
  { title: "装修流程", tabid: 3 },
  { title: "选材手册", tabid: 4 },
  { title: "装修风水", tabid: 5 }
];

class Decorate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: ""
    };
    this.toxuedetails = this.toxuedetails.bind(this);
  }
  componentDidMount() {
    this.getxuetang(1);
  }
  tablistchange = e => {
    let b = Number(e.tabid);
    this.getxuetang(b);
  };
  getxuetang = e => {
    console.log(e);
    let urllist = xuetanglist + "?" + "type_id" + "=" + e;
    console.log(urllist);
    sendReq(urllist, "POST").then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          msg: rep.data.response.list
        });
      }
    });
  };
  toxuedetails = (item, index) => {
    var data = { id: item };
    var path = "/xuedetail/" + data.id;
    this.props.history.push(path);
  };
  render() {
    var o = this;
    let xuelist =
      this.state.msg &&
      this.state.msg.map(function(item, index) {
        return (
          <div
            className="xuelist"
            key={index}
            onClick={o.toxuedetails.bind(this, item.id)}
          >
            <div className="title">{item.title}</div>
            <img src={item.head_img} alt="" />
          </div>
        );
      });
    let tanglist =
      this.state.msg &&
      this.state.msg.map(function(item, index) {
        return (
          <div
            className="tanglist"
            key={index}
            onClick={o.toxuedetails.bind(this, item.id)}
          >
            <div className="tangleft">
              <img src={item.head_img} alt="" />
            </div>
            <div className="tangright">
              <div className="topname">{item.title}</div>
              <div className="biaoqiuan">
                {item.keyword &&
                  item.keyword.map(function(itemchild, indexchild) {
                    return <span key={indexchild}>{itemchild}</span>;
                  })}
              </div>
            </div>
          </div>
        );
      });
    return (
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <Header msg={this.props} toptext="服务流程" />
        <Tabs tabs={tabs} initialPage={0} onChange={this.tablistchange}>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              marginTop: "6rem"
            }}
          >
            {xuelist}
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              marginTop: "7rem"
            }}
          >
            {tanglist}
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              marginTop: "7rem"
            }}
          >
            {tanglist}
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              marginTop: "7rem"
            }}
          >
            {tanglist}
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Decorate;

import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { xuedetail } from '../api/api';
import { sendReq } from '../utils/ajax';
import Header from '../components/header';
import '../App.css';



class Xuedetail extends Component {
    constructor(props){
        super(props)
        this.state={
            pageid:'',
            content:'',
            title:'',
            createtime:'',
        }
    }
    componentDidMount(){  
        console.log(this.props);
        let id=this.props.match.params?this.props.match.params.id:'';
        console.log(id);
        let urllist =xuedetail+"?" + "id" + "=" + id;
        console.log(urllist);
        sendReq(urllist,'POST').then(rep=>{   
            console.log(rep.data);
            let shijian =rep.data.response.created_at;
            var date = new Date(shijian * 1000);//如果date为10位不需要乘1000
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
            let shi =Y + M + D + h + m + s;

            if(rep.data.response){
                this.setState({
                    content:rep.data.response.content,
                    title:rep.data.response.title,
                    createtime:shi
                });
            }
        })
    }
    render() {
        return (
        <div>
            <Header msg={this.props} toptext="装修详情"/>
            <div className="xuedetailtitle" style={{marginTop:"3rem",backgroundColor:"#fff"}}>
                {this.state.title}
            </div>
            <div className="createtime">
                {this.state.createtime}
            </div>
            <div className="fuwenben" dangerouslySetInnerHTML={{__html:this.state.content}} >
            
            </div>
        </div>
        );
    }
}

export default Xuedetail;
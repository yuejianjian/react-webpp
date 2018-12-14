import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import Header from "../components/header";
import { yuangong } from "../api/api";
import { sendReq } from "../utils/ajax";
import { withRouter } from 'react-router-dom';
import '../App.css';


class TeamStyle extends Component {
  constructor(props) {
    super(props);
    this.state={
      Count:0,
      teamlist:[],
    }
  }
  componentDidMount(){
    sendReq(yuangong, "POST").then(rep => {
      console.log(rep.data);
      if (rep.data.response) {
        this.setState({
          teamlist: rep.data.response.staff,
        });
      }
    });
  }
  appointment=(e)=>{
    this.props.history.replace('/appointment');
  }
  render() {
      let that = this;
    let teamlist =this.state.teamlist&&this.state.teamlist.map(function(item,index){
        return(
            <li key={index}>
                <div className="headertou">
                    <div className="headphoto">
                        <img src={item.avator} alt=""/>
                    </div>
                    <div className="jobappointment">
                        <div className="job">
                            <span className="name">{item.name}</span>
                            <span className="zhiwei">{item.job}</span>
                        </div>
                        <div className="appointment">
                            <span className="num">{item.follower}</span>
                            <span className="miao">个预约</span>
                        </div>
                    </div>
                    <div className="makeorder" onClick={that.appointment.bind(this,item.id)} >
                    约TA
                    </div>
                </div>
                <div className="tucaselist">
                    {
                        item.cases&&item.cases.map(function(tulist,indextu){
                            return(
                                <div className="caseslist" key={indextu}>
                                    <img src={tulist.head_picture} alt=""/>
                                    <div className="tutitle">{tulist.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </li>
        )
    })
    return (
      <div>
        <Header msg={this.props} toptext="员工风采" />
        <div className="teamstyle">
            <ul>
                {teamlist}
            </ul>
        </div>
      </div>
    );
  }

}

export default withRouter(TeamStyle);
import React, { Component } from 'react';
import { TabBar  } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import '../App.css';
import incoy from '../lab/image/shou-1.png'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
          hidden: false,
          fullScreen: false,
        };
      }
    
    render() {
      const {pathname} = this.props.location
        return (
            <div style={ { position: 'fixed', bottom:0, width: '100%',}}>
            <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
            >
              <TabBar.Item
                title="首页"
                key="Life"
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background:`url(${require("../lab/image/shou-11.png")}) center center /  21px 21px no-repeat`
                 }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background:`url(${require("../lab/image/shou-1.png")}) center center /  21px 21px no-repeat`
                }}
                />
                }
                selected={pathname==='/'}
                onPress={()=>{
                  this.props.history.push('/')
                }}
                data-seed="logId"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../lab/image/an-11.png")}) center center /  21px 21px no-repeat` 
                  }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../lab/image/an-1.png")}) center center /  21px 21px no-repeat`  
                  }}
                  />
                }
                title="案例"
                key="Koubei"
                selected={pathname==='/page2'}
                onPress={()=>{
                  this.props.history.push('/page2')
                }}
                data-seed="logId1"
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../lab/image/tao-11.png")}) center center /  21px 21px no-repeat` 
                    }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../lab/image/tao-1.png")}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="套餐"
                key="Friend"
                selected={pathname==='/page3'}
                onPress={()=>{
                  this.props.history.push('/page3')
                }}
              >
              </TabBar.Item>
              <TabBar.Item
                icon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../lab/image/xiao-11.png")}) center center /  21px 21px no-repeat` 
                    }}
                  />
                }
                selectedIcon={
                  <div style={{
                    width: '22px',
                    height: '22px',
                    background:`url(${require("../lab/image/xiao-1.png")}) center center /  21px 21px no-repeat` }}
                  />
                }
                title="预约"
                key="my"
                selected={pathname==='/page4'}
                onPress={()=>{
                  this.props.history.push('/page4')
                }}
              >
              </TabBar.Item>
            </TabBar>
          </div>
        );
    }
}

export default withRouter(Footer);
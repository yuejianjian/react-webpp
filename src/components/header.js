import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  NavBar, Icon
} from 'antd-mobile';

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
    }
    this.goback = this.goback.bind(this);
  }
 
  goback(){
    console.log(this.props);
    this.props.msg.history.goBack()
  }
    render() {
      return (
        <div>
        <NavBar
            style={{position:"fixed",top:"0",width:"100%",zIndex:"1000",borderBottom:"1px solid #dfdddd"}}
            mode="light"
            icon={<Icon type="left" onClick={this.goback}/>}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
            <Icon key="0" type="search" style={{marginRight: '16px'}} />,
            <Icon key="1" type="ellipsis" />
            ]}
        >{this.props.toptext}</NavBar>
    </div>
      );
    }
  }


export default Header;
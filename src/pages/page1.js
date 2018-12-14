import React, { Component } from 'react';
import { Carousel, WingBlank , Flex, WhiteSpace} from 'antd-mobile';
import { Link ,withRouter } from 'react-router-dom';
import Footer from '../components/footer';
import { loginApi } from '../api/api';
import { sendReq } from '../utils/ajax';
import xue from '../lab/image/xue.png';
import tu from '../lab/image/tu.png';
import yuan from '../lab/image/yuan.png';
import fu from '../lab/image/fu.png';
import '../App.css';


class Page1 extends Component {
  constructor(props){
    super(props)
    this.state ={
      data:'',
      zhengzhuang:'',
      anli:'',
      anlilist:'',
      mingxing:'',
    }
  }
  componentWillMount(){
    this.getmessage();
  }

  getmessage =() =>{
      sendReq(loginApi,'POST').then(rep=>{   
        console.log(rep.data.response);
        if(rep.data.response){
          this.setState({
            data:rep.data.response.poster,
            zhengzhuang:rep.data.response.suit.list,
            anli:rep.data.response.cases,
            anlilist:rep.data.response.cases.list,
            mingxing:rep.data.response.staff,
          });
        }
      })
  }
  IncoSelect=(e)=>{
    console.log(e);
  }
  anli=()=>{
    this.props.history.replace('/page2');
  }
  mingxing=()=>{
    this.props.history.replace('/teamstyle');
  }
  gotaocan=(e)=>{
    var data = { id: e };
    var path = "/combodetails/" + data.id;
    this.props.history.push(path);
  }
  render() {
    return (
      <div style={{marginBottom:"4rem"}}>
          <WingBlank style={{ width: '100%',marginLeft:"0px",marginRight:"0px", }}>
            <Carousel
              autoplay={true}
              infinite={true}
              autoplayInterval={2000}
              style={{ width: '100%',marginLeft:"0px",marginRight:"0px", }}
            >
              {this.state.data && this.state.data.map(val => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{ display: 'inline-block', width: '100%',}}
                  className="lunbotu"
                >
                  <img
                    src={val.img}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    className="lunbotu"
                    onLoad={() => {
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
          <Flex className="listtab">
            <Flex.Item>
              <Link to="/decorate">
                <div className="box">
                  <img src={xue} alt=""/>
                  <div className="text">
                  装修学堂
                  </div>
                </div>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/tuce">
                <div className="box">
                  <img src={tu} alt=""/>
                  <div className="text">
                  精美图册
                  </div>
                </div>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/teamstyle">
                <div className="box">
                  <img src={yuan} alt=""/>
                  <div className="text">
                  员工风采
                  </div>
                </div>
              </Link>
            </Flex.Item>
            <Flex.Item>
              <Link to="/fuwu">
                <div className="box">
                  <img src={fu} alt=""/>
                  <div className="text"> 
                  服务流程
                  </div>
                </div>
              </Link>
            </Flex.Item>
          </Flex>
          <div className='act_pic'>
            <div className="line"></div>
            <img src={require('../lab/image/know.png')} />
            <div className="linee"></div>
          </div>
          <div className="title-text">
            <div className='text-zheng'>整装套餐</div>
          </div>
          <div className='zheng-img' onClick={this.gotaocan.bind(this,this.state.zhengzhuang.id)}>
            <img src={this.state.zhengzhuang.main_picture} />
          </div>
          <div className="incolist">
            <ul>
              <li onClick={this.IncoSelect.bind(this,6)}>
                <img src={require('../lab/image/inco-1.png')} alt="" className="yesselect"/>
              </li>
              <li onClick={this.IncoSelect.bind(this,8)}>
                <img src={require('../lab/image/inco-2.png')} alt="" className="yesselect"/>
              </li>
              <li onClick={this.IncoSelect.bind(this,7)}>
                <img src={require('../lab/image/inco-3.png')} alt="" className="yesselect"/>
              </li>
              <li onClick={this.IncoSelect.bind(this,9)}>
                <img src={require('../lab/image/inco-4.png')} alt="" className="yesselect"/>
              </li>
              <li onClick={this.IncoSelect.bind(this,10)}>
                <img src={require('../lab/image/inco-5.png')} alt="" className="yesselect" />
              </li>
              <li onClick={this.IncoSelect.bind(this,11)}>
                <img src={require('../lab/image/inco-6.png')} alt="" className="yesselect" />
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
          <div className="yingyin"></div>
          <div className="title-text">
            <span className='text-zheng'>{this.state.anli.title}</span>
            <span className='gengduo' onClick={this.anli.bind(this)}>更多></span>
          </div>
          <div className='zheng-img'>
            <img src={this.state.anlilist.head_picture} />
            <div className='anli-text'>
              <div className='anli-title'>{this.state.anlilist.brief}</div> 
              <div className='anli-wen'>
                <span className="wen-1">{this.state.anlilist.acreage}</span>
                <span className="wen-1">{this.state.anlilist.total_price}</span>
                <span className="wen-1">{this.state.anlilist.style}</span>
                <span className="wen-1">{this.state.anlilist.house}</span>
              </div> 
            </div> 
          </div>
          <div className="yingyin"></div>
          <div className="title-text">
            <span className='text-zheng'>{this.state.mingxing.title}</span>
            <span className='gengduo' onClick={this.mingxing.bind(this)}>更多></span>
          </div> 
          <div className='mingxing'>
            {this.state.mingxing.list&&this.state.mingxing.list.map(function(item,index){
              return(
                <div className='ming-list' key={index}>
                    <img className='ming-inco' src={item.avator} />
                    <div className='ming-name'>{item.name}</div>
                    <div className='ming-zhi'>{item.job}</div>
                </div>
              )
            })}  
            
          </div>
          <div className="yingyin"></div>
          <div className="title-text">
            <div className='text-zheng'>服务流程</div>
          </div>
          <div className='fuwu'>
            <img src={require('../lab/image/fuwu.png')} />
          </div>   
          <Footer />
      </div>
    );
  }
}

export default withRouter(Page1);

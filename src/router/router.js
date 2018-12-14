import React from 'react'
import {HashRouter, Route, Switch, hashHistory} from 'react-router-dom';
 
import App from '../App'
import Page1 from '../pages/page1'
import Page2 from '../pages/page2'
import Page3 from '../pages/page3'
import Page4 from '../pages/page4'
import Fuwu from '../pages/fuwu'
import Decorate from '../pages/decorate'
import Xuedetail from '../pages/xuedetail'
import Tuce from '../pages/tuce'
import TeamStyle from '../pages/teamstyle';
import Appointment from '../pages/appointment';
import ComboDetails from '../pages/combodetails';

 
class RouterMap extends React.Component {
    render() {
        return (   
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Page1}/>
                <Route path='/page2' component={Page2}/>
                <Route path='/page3' component={Page3}/>
                <Route path='/page4' component={Page4}/>
                <Route path='/fuwu' component={Fuwu}/>
                <Route path='/decorate' component={Decorate}/>
                <Route path='/xuedetail/:id' component={Xuedetail}/>
                <Route path='/tuce' component={Tuce}/>
                <Route path='/teamstyle' component={TeamStyle}/>
                <Route path='/appointment' component={Appointment}/>
                <Route path='/combodetails/:id' component={ComboDetails}/>
            </Switch>
        </HashRouter>
        )
    }
}
 
export default RouterMap
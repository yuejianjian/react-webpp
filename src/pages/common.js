import { bindActionCreators } from 'redux';
import { LoginInfo } from '../action/index';

//需要优化代码
export function mapStateToProps(state) {
    console.log(state);
    const auth=state;
    console.log(auth);
    if (auth) {
        return {user: auth};
    }
}

export  function mapDispatchToProps(dispatch,ownProps) {
    return {
        LoginInfo: bindActionCreators(LoginInfo, dispatch,ownProps),
    }
}
import {sendReq,sendReqjq} from '../utils/ajax';

import { loginApi }  from '../api/api';

export const LOGIN_INFO = 'LOGIN_INFO';

export function LoginInfo(data) {
    return {
      type: 'LOGIN_INFO',
      payload: {
        promise: sendReq(loginApi,'POST',data)
      }
    }
  }
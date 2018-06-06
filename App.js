/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Alert,
} from 'react-native';
import Login from './pages/login/Login';
import * as promiseAjax from './commons/ajax/promise-ajax';
import baseUrl from './commons/local-ajax-base-url';
import AllRoutes from './allRoutes';

promiseAjax.init({
    setOptions: (instance) => {
        instance.defaults.baseURL = baseUrl;
        instance.defaults.timeout = 60000;
    },
    onShowErrorTip: (err, errorTip) => {
        if (errorTip === false) return;
        let msg = '操作失败';
        if (errorTip) msg = errorTip;
        if (err.response) {
            const resData = err.response.data;
            const {status} = err.response;

            if (resData && resData.resultMsg) {
                msg = resData.resultMsg;
            }

            if (status === 401) { // 需要登录
                return toLogin();
            }

            if (status === 403) {
                msg = '您无权访问此资源！';
            }

            if (status === 404) {
                msg = '您访问的资源不存在！';
            }
        }

        if (err && err.message && err.message.startsWith('timeout of')) {
            msg = '请求超时！';
        }
        console.log(12313, err);
        Alert.alert(msg);
    },
    onShowSuccessTip: (response, successTip) => {
        console.log(response, successTip);
    },
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <AllRoutes/>
    );
  }
}

import { observable, action, makeObservable } from 'mobx';
import { Request } from '../common';
import { CONFIG_URL, LOCAL_STORAGE, STATUS_LOGIN } from '../helpers/constants';
import { WsCode } from '../helpers/Wscode';
import {} from '../helpers/constants';

class AuthStore {
    constructor() {
        makeObservable(this, {
            navCollapsed: observable,
            width_screen: observable,
            isLogin: observable,
            action_openSidebar: action,
            action_closeSidebar: action,
            action_loginUser: action,
            action_logout: action,
        });
    }
    navCollapsed = false;
    width_screen = window.innerWidth;
    token = '';
    isLogin = STATUS_LOGIN.WAIT_LOGIN;
    async action_openSidebar() {
        this.navCollapsed = !this.navCollapsed;
    }

    async action_closeSidebar() {
        this.navCollapsed = !this.navCollapsed;
    }

    async action_loginUser(params) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/${WsCode.loginCRM}`;

        const result = await Request.post(WsCode.loginCRM, params, DOMAIN);
        if (result?.data) {
            const {token, session , username} = result.data;
            const dataAuth = {
                sessionId : session,
                token : token
            }
            await localStorage.setItem(LOCAL_STORAGE.AuthStore, JSON.stringify(dataAuth));
            await localStorage.setItem(LOCAL_STORAGE.USER_INFO, JSON.stringify(username));
            this.isLogin = STATUS_LOGIN.ADMIN_LOGIN;
            // this.action_getInfo();
            // console.log(token)
        } else {
            this.isLogin = STATUS_LOGIN.NOT_LOGIN;
        }

        return result;
    }

    async action_logout(history) {
        await localStorage.removeItem(LOCAL_STORAGE.TOKEN);
        this.isLogin = STATUS_LOGIN.NOT_LOGIN;
        history.push('/signin');
    }
}
const AuthStoreContext = new AuthStore();

export default AuthStoreContext;

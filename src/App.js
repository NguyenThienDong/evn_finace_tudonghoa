import { useEffect } from 'react';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import 'moment/locale/vi';
import { observer } from 'mobx-react-lite';
import { useStore } from '../src/stores/hooks';
import AuthStoreContext from '../src/stores/AuthStore';
import { LOCAL_STORAGE, STATUS_LOGIN } from './helpers/constants';
import { Loading } from './common';
import LayoutAdmin from './screens/layouts/containers/LayoutAdmin';
import LoginScreenFailed from './screens/login/LoginScreenFailed';
import { useHistory, useLocation } from 'react-router-dom';
import "../src/style/export.scss";


const App = observer((props) => {
    const AuthStore = useStore(AuthStoreContext);
    const history = useHistory();
    const location = useLocation();
    useEffect(() => {
        console.log('AuthStore', AuthStore.width_screen);
        window.addEventListener('resize', () => {
            AuthStore.width_screen = window.innerWidth;
        
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        handle_fetchData();
    }, [location.pathname]);

    const handle_fetchData = async () => {
        AuthStore.isLogin = STATUS_LOGIN.ADMIN_LOGIN;
        // let dataAuth;
        // dataAuth = await localStorage.getItem(LOCAL_STORAGE.TOKEN);
        // if (dataAuth) {
        //     const result = await AuthStore.action_getInfo();
        //     AuthStore.isLogin = STATUS_LOGIN.ADMIN_LOGIN;
        // } else {
        //     AuthStore.isLogin = STATUS_LOGIN.NOT_LOGIN;
        //     history.push('/signin');
        // }
    };
    console.log("AuthStore.isLogin", AuthStore.isLogin);
    return (    
        <>
            <Switch>
                <Route exact path="/signin"  />
                <Route
                    exact
                    path="/signin-failed"
                    component={LoginScreenFailed}
                />
                <AdminRoute
                    isSignedIn={AuthStore.isLogin}
                    path="/"
                    component={LayoutAdmin}
                />
            </Switch>
        </>
    );
});

const AdminRoute = (props) => {
    const { component: Component, isSignedIn, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(routeProps) => {
                if (isSignedIn === STATUS_LOGIN.WAIT_LOGIN) {
                    return <Loading isLoading={true} />;
                } else if (isSignedIn === STATUS_LOGIN.ADMIN_LOGIN) {
                    return <Component {...routeProps} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/signin',
                                state: { from: routeProps.location },
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default withRouter(App);

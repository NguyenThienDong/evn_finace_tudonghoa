import { Route, Switch, useHistory } from 'react-router-dom';
import NotFoundPage from './404/NotFoundPage';
import Circular35 from './Circular/Circular35';
import RightsGroup from './Decentralizations/UserGroup/RightsGroup';
import UserGroup from './Decentralizations/UserGroup/UserGroup';
import DefaultScreen from './default/DefaultScreen';
import Home from './home/Home';

const AdminRouters = (props) => {
    return (
        <Switch>
            {/* home */}
            <Route
                exact
                path={`${props.match.url}`}
                component={DefaultScreen}
            />
            {/* Quản lý phân quyền */}
            <Route
                exact
                path={`${props.match.url}user-group`}
                component={UserGroup}
            />
            <Route
                exact
                path={`${props.match.url}rights-group`}
                component={RightsGroup}
            />
            {/* Thông tư 35 */}
            <Route
                exact
                path={`${props.match.url}circulars-35`}
                component={Circular35}
            />

            {/* Dashboad */}
            <Route exact path={`${props.match.url}home`} component={Home} />
            <Route path='*' component={NotFoundPage} />
        </Switch>
    );
};

export default AdminRouters;

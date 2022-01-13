import {
    HomeOutlined,
    SearchOutlined,
    WalletOutlined,
} from '@ant-design/icons';
import { Input, Menu } from 'antd';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { GLOBAL_CLIENT } from '../../../helpers/GlobalClient';
import AuthStoreContext from '../../../stores/AuthStore';
import { useStore } from '../../../stores/hooks';
import SidebarLogo from './SidebarLogo';
import React, { useEffect, useState } from 'react';
import CartIcon from '../../../common/Icons/CartIcon';

const { SubMenu } = Menu;
const SidebarContent = observer((props) => {
    let history = useHistory();
    const { location } = props;
    const { t } = useTranslation();
    const AuthStore = useStore(AuthStoreContext);

    const pathUrl = location.pathname.substr(1);
    const splitPathUrl = pathUrl.split('/');
    const [current, setCurrent] = useState(
        location.pathname === '/' || location.pathname === ''
            ? '/home'
            : location.pathname
    );

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);
    const handleCloseSideBar = () => {
        AuthStore.action_closeSidebar();
    };
    function handleRedirectRoute(route) {
        history.push(route);
    }

    //menu
    const renderMenus = () => {
        return (
            <>
                <SubMenu
                    key='decentralizations'
                    title={
                        <span className='fix_icon'>
                            <CartIcon />
                            <span className='title-menu'>
                                {`Quản lý phân quyền `}
                            </span>
                        </span>
                    }
                >
                    <Menu.Item
                        key='/user-group'
                        onClick={() => handleRedirectRoute('/user-group')}
                    >
                        <span className='fs-11'>Nhóm báo cáo</span>
                    </Menu.Item>
                    <Menu.Item
                        key='/rights-group'
                        onClick={() => handleRedirectRoute('/rights-group')}
                    >
                        <Link to='/rights-group'>
                            <span className='fs-11'>Các nhóm quyền</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    key='reports'
                    title={
                        <span className='fix_icon'>
                            <CartIcon />
                            <span className='title-menu'>Quản lý báo cáo</span>
                        </span>
                    }
                >
                    <Menu.Item
                        key='/circulars-35'
                        onClick={() => handleRedirectRoute('/circulars-35')}
                    >
                        <span className='fs-11'>Báo cáo TT35</span>
                    </Menu.Item>
                    <Menu.Item
                        key='/internal-administration'
                        onClick={() =>
                            handleRedirectRoute('/internal-administration')
                        }
                    >
                        <Link to='/internal-administration'>
                            <span className='fs-11'>
                                Báo cáo quản trị nội bộ
                            </span>
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu
                    key='promulgated-text'
                    title={
                        <span className='fix_icon'>
                            <CartIcon />
                            <span className='title-menu'>Văn bản ban hành</span>
                        </span>
                    }
                >
                    <Menu.Item
                        key='/state-agencies'
                        onClick={() => handleRedirectRoute('/state-agencies')}
                    >
                        <span className='fs-11'>Cơ quan nhà nước</span>
                    </Menu.Item>
                    <Menu.Item
                        key='/issued-internally'
                        onClick={() =>
                            handleRedirectRoute('/issued-internally')
                        }
                    >
                        <Link to='/issued-internally'>
                            <span className='fs-11'>Ban hành nội bộ</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
            </>
        );
    };

    return (
        <>
            <SidebarLogo
                sidebarCollapsed={props.sidebarCollapsed}
                setSidebarCollapsed={props.setSidebarCollapsed}
                collapsed={props.collapsed}
            />
            <hr />

            <Input
                bordered={false}
                placeholder='Nhập từ khóa tìm kiếm'
                className='mb-3'
                prefix={<SearchOutlined className='icon-filter' />}
            />

            <Menu
                className='menu-sidebar'
                mode='inline'
                theme='light'
                selectedKeys={[current]}
                style={{ width: 'inherit' }}
            >
                {renderMenus()}
            </Menu>
        </>
    );
});

export default SidebarContent;

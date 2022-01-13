import {
    BellOutlined,
    InfoCircleOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PoweroffOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Layout, Menu, Popover } from 'antd';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Images from '../../../common/Images';
import { TAB_SIZE } from '../../../helpers/constants';
import {
    logOut,
    showConfirmAlert,
    showSuccessAlert,
} from '../../../helpers/functions';
import AuthStoreContext from '../../../stores/AuthStore';
import { useStore } from '../../../stores/hooks';
import AdminRouters from '../../AdminRouters';
import Sidebar from '../sidebar/Sidebar';
import InfoUser from './InfoUser';
import { LOCAL_STORAGE } from '../../../helpers/constants';

import './style.css';
import { slice, split } from 'lodash';
const { Content, Header, Footer } = Layout;

const LayoutAdmin = observer((props) => {
    const match = useRouteMatch();
    const [collapsed, setCollapsed] = useState(false);
    const { history } = props;
    const AuthStore = useStore(AuthStoreContext);

    const [visible, setVisible] = useState(false);
    // console.log('data_getUserInfo', data_getUserInfo);
    const onLoadInfo = async () => {
        // await AuthStore.action_getInfo();
    };
    const onClose = () => {
        setVisible(false);
    };

    const text = (
        <span style={{ fontSize: '15px', fontWeight: '400' }}>Thông báo</span>
    );
    // gọi userName
    const [name, setName] = useState({
        name: '',
    });
    const onCollapsed = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        setName({
            name: JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_INFO)),
        });
    }, []);
    const content = (
        <div className='list-notification'>
            <div className='list-item-date'>
                <p className='title-notification-date'>22/22/222</p>
                <ul className='list-item-notification'>
                    <li>
                        <img src='' alt='' />
                        <div className='item-right'>
                            <p>tiêu đề</p>
                            <p className='date'>
                                {moment().format('DD/MM/YYYY')}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
    const handleAdminLogoutClick = () => {
        showConfirmAlert(`Bạn có muốn đăng xuất?`).then(async (rs) => {
            if (rs.isConfirmed) {
                showSuccessAlert('Đăng xuất thành công!').then(() => {
                    logOut();
                    history.push('/signin');
                });
            }
        });
    };
    const contentUser = (
        <div className='sub-menu-info'>
            <Button
                type='text'
                icon={<InfoCircleOutlined />}
                onClick={() => setVisible(true)}
            >
                Thông tin
            </Button>
            <Button
                type='text'
                icon={<PoweroffOutlined />}
                onClick={handleAdminLogoutClick}
            >
                Đăng xuất
            </Button>
        </div>
    );
    const menu = (
        <Menu>
            <Menu.Item>
                <LogoutOutlined /> Đăng xuất
            </Menu.Item>
        </Menu>
    );

    const handleOpenSidebar = () => {
        AuthStore.action_openSidebar();
    };

    return (
        <Layout
            className='gx-app-layout layout-admin'
            // style={{ minHeight: '100vh' }}
        >
            <Sidebar collapsed={collapsed} {...props}/>
            <Layout className='site-layout'>
                {AuthStore.width_screen < TAB_SIZE && (
                    <div className='gx-linebar header-mobile-container'>
                        <div>
                            <i
                                className='gx-icon-btn icon icon-menu'
                                onClick={handleOpenSidebar}
                            />
                        </div>
                    </div>
                )}
                {AuthStore.width_screen > TAB_SIZE && (
                    <div className='gx-layout-sider-header gx-layout-sider-header-top'>
                
                        <div className='slogan-site'>
                            {React.createElement(
                                collapsed
                                    ? MenuUnfoldOutlined
                                    : MenuFoldOutlined,
                                {
                                    className: 'trigger',
                                    onClick: onCollapsed,
                                }
                            )}
                            <span className='ml-3'>CÔNG TY TÀI CHÍNH CỔ PHẦN ĐIỆN LỰC</span>
                        </div>
                        <div>
                            <span style={{ marginRight: '20px' }}>
                                <Popover
                                    placement='bottomRight'
                                    title={text}
                                    content={content}
                                    trigger='click'
                                    overlayStyle={{
                                        width: '500px',
                                    }}
                                >
                                    {/* <Badge dot={true} offset={[0, 5]}> */}
                                    <Avatar
                                        // shape='square'
                                        icon={<BellOutlined />}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {/* </Badge> */}
                                </Popover>
                            </span>
                            <span className='avatar-item'>
                                <Badge>
                                    <Popover
                                        placement='bottom'
                                        title={false}
                                        content={contentUser}
                                        trigger='click'
                                    >
                                        <Avatar
                                            // shape='square'
                                            style={{
                                                color: '#f56a00',
                                                backgroundColor: '#fde3cf',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                Đ
                                            </span>
                                        </Avatar>
                                    </Popover>
                                    <span style={{ marginLeft: '10px' }}>
                                        Nguyễn Thiện Đông
                                    </span>
                                </Badge>
                            </span>
                        </div>
                    </div>
                )}
                {/* <InfoUser
                    // user_info={user_info}
                    visible={visible}
                    onClose={onClose}
                    onLoadInfo={onLoadInfo}
                /> */}
                <Content
                    className={`gx-layout-content gx-main-content-wrapper`}
                >
                    <AdminRouters match={match} />
                </Content>
                <Footer className='bgColor-common'>
                    <small className='w-50'>
                        © Admin 2021. Design copyright belongs to Giang Design
                    </small>{' '}
                    |<small className='w-25'>Terms of use</small>
                    <small className='w-25'>Privacy & Policy</small>
                </Footer>
            </Layout>
        </Layout>
    );
});

export default LayoutAdmin;

import { BellOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Avatar, Badge, Layout, Popover } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { TAB_SIZE } from '../../../helpers/constants';
import AuthStoreContext from '../../../stores/AuthStore';
import { useStore } from '../../../stores/hooks';

const { Header } = Layout;

const HeaderContainer = observer((props) => {
    const { collapsed } = props;
    const AuthStore = useStore(AuthStoreContext);
    
    const onCollapsed = () => {
        props.onCollapsed();
    };
    return (
        <>
            <Header
                className='site-layout-background'
                style={{ padding: '10px' }}
                user_info={[]}
                // visible={visible}
                // onClose={onClose}
                // onLoadInfo={onLoadInfo}
            >
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        className: 'trigger',
                        onClick: onCollapsed,
                    }
                )}
            </Header>
            {AuthStore.width_screen > TAB_SIZE && (
                <div className='gx-layout-sider-header gx-layout-sider-header-top'>
                    <div className='slogan-site'>
                        CÔNG TY TÀI CHÍNH CỔ PHẦN ĐIỆN LỰC
                    </div>
                    <div>
                        <span style={{ marginRight: '20px' }}>
                            <Popover
                                placement='bottomRight'
                                // title={text}
                                // content={content}
                                trigger='click'
                                overlayStyle={{
                                    width: '500px',
                                }}
                            >
                                <Badge dot={true} offset={[0, 5]}>
                                <Avatar
                                    // shape='square'
                                    icon={<BellOutlined />}
                                    style={{ cursor: 'pointer' }}
                                />
                                </Badge>
                            </Popover>
                        </span>
                        <span className='avatar-item'>
                            <Badge>
                                <Popover
                                    placement='bottom'
                                    title={false}
                                    // content={contentUser}
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
                                            Đông
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
        </>
    );
});

export default HeaderContainer;

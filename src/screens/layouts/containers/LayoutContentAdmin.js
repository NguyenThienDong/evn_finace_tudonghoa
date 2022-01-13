import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

const { Content, Header } = Layout;

const LayoutContentAdmin = observer((props) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleBackClick = () => {
        props.history.goBack();
    };

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className='site-layout'>
            <Header className='site-layout-background' style={{ padding: 0 }}>
                {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                        className: 'trigger',
                        onClick: onCollapse,
                    }
                )}
            </Header>
            <Content style={{ margin: '0 16px' }}>
                {/* <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>
                        {props.history &&
                            props.history.location &&
                            props.history.location.pathname}
                    </Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ margin: '16px 0' }}>
                    <a href='#!' onClick={handleBackClick}>
                        {'<'} Quay lại
                    </a>
                </div>

                <div
                    className='site-layout-background'
                    style={{ padding: 24, minHeight: 360 }}
                >
                    {props.children}
                </div>
            </Content>
        </Layout>
    );
});

export default LayoutContentAdmin;

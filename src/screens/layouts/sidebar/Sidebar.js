import { Layout, Drawer } from 'antd';
import SidebarContent from './SidebarContent';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/hooks';
import { TAB_SIZE } from '../../../helpers/constants';
import AuthStoreContext from '../../../stores/AuthStore';
import { useState } from 'react';
const { Sider } = Layout;

const Sidebar = observer((props) => {
    const AuthStore = useStore(AuthStoreContext);

    const handleCloseSidebar = () => {
        AuthStore.action_closeSidebar();
    };

    return (
        <Sider
            className={`gx-app-sidebar gx-layout-sider-light`}
            theme={'light'}
            trigger={null}
            collapsible
            collapsed={props.collapsed}
        >
            {AuthStore.width_screen < TAB_SIZE ? (
                <Drawer
                    className={`gx-drawer-sidebar drawer-container`}
                    placement='left'
                    closable={false}
                    onClose={handleCloseSidebar}
                    visible={AuthStore.navCollapsed}
                >
                    <SidebarContent {...props} sidebarCollapsed={true} />
                </Drawer>
            ) : (
                <SidebarContent {...props} sidebarCollapsed={true} />
            )}
        </Sider>
    );
});
export default Sidebar;

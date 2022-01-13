import { Link } from 'react-router-dom';
import Images from '../../../common/Images';

const SidebarLogo = (props) => {
    return (
        <div className='sider-header-top'>
            <Link to='/' className='site-logo'>
                <img src={Images.logo} alt='logo' className='img-logo' />
            </Link>
        </div>
    );
};

export default SidebarLogo;

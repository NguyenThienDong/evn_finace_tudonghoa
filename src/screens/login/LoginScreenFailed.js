import { Button } from 'antd';
// import Checkbox from "antd/lib/checkbox/Checkbox";
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/hooks';
// import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const LoginScreenFailed = observer((props) => {
    const AuthStore = useStore('AuthStore');

    useEffect(() => {}, []);

    return (
        <div className="gx-app-login-wrap gx-app-login-wrap-failed">
            <div className="container-login">
                <div className="container-form-failed">
                    <p>
                        Xảy ra lỗi trong quá trình đăng nhập: Tài khoản của bạn
                        chưa được kích hoạt
                    </p>
                    <Link to="/signin">
                        <Button
                            className="color-btn-evn"
                            type="primary"
                            style={{ width: '130px' }}
                        >
                            OK
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
});

export default LoginScreenFailed;

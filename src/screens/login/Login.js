import { Button, Form, Input, Row } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import AuthStoreContext from '../../../src/stores/AuthStore';
import { Loading } from '../../common';
import Images from '../../common/Images';
import { LOCAL_STORAGE } from '../../helpers/constants';
import { GLOBAL_CLIENT } from '../../helpers/GlobalClient';
import { useStore } from '../../stores/hooks';
import { LoginMs } from './LoginMs';

const Login = observer((props) => {
    const AuthStore = useStore(AuthStoreContext);
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);

    let history = useHistory();
    const [form] = Form.useForm();

    useEffect(() => {
        handleSetDataDefault();
    }, []);

    // login microsoft

    // end login
    const handleSetDataDefault = async () => {
        const rememberMe = await localStorage.getItem(
            LOCAL_STORAGE.REMEMBER_ME
        );

        if (rememberMe === 'false') {
            form.setFieldsValue({
                rememberMe: false,
            });
        } else {
            form.setFieldsValue({
                rememberMe: true,
            });
        }
    };

    const onFinishFailed = (errorInfo) => {};

    const onFinish = async (values) => {
        setIsLoading(true);
        delete values['rememberMe'];
        const result = await AuthStore.action_loginUser(values);
        if(result) {
            history.push("/home")
        }
        setIsLoading(false);
    };
    return (
        <>
            <Loading isLoading={isLoading} />
            <Form
                form={form}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="gx-signin-form gx-form-row0"
            >
                <Row className="logo-login">
                    <img src={Images.logo} alt="" />
                </Row>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                        },
                    ]}
                    name="username"
                >
                    <Input placeholder={t(GLOBAL_CLIENT.username)} />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                        },
                    ]}
                    name="password"
                >
                    <Input
                        type="password"
                        placeholder={t(GLOBAL_CLIENT.password)}
                    />
                </Form.Item>
                <Form.Item name="rememberMe" valuePropName="checked">
                    <Checkbox>{t(GLOBAL_CLIENT.rememberMe)}</Checkbox>
                </Form.Item>
                <Form.Item className="gx-mb-0">
                    <Button
                        block
                        type="primary"
                        htmlType="submit"
                        className="color-btn-evn w-100"
                    >
                        {t(GLOBAL_CLIENT.login)}
                    </Button>
                </Form.Item>
                <h1 className="or-login">hoặc</h1>
                <LoginMs />
            </Form>
        </>
    );
});

export default Login;

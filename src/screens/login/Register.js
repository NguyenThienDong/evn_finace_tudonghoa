import { Button, Input, Form, Tabs } from "antd";
// import Checkbox from "antd/lib/checkbox/Checkbox";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import { LOCAL_STORAGE } from "../../helpers/constants";
import { Loading } from "../../common";
// import Images from "../../common/Images";
import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useStore } from "../../stores/hooks";
// import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

const Register = observer((props) => {
    const AuthStore = useStore("AuthStore");
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(false);
    const { history } = props;
    const [form] = Form.useForm();

    const onFinishFailed = (errorInfo) => { };

    const onFinish = async (values) => {
        setIsLoading(true);

        const result = await AuthStore.action_RegisterUser(values);

        if (result) {
            setIsLoading(false);
            form.resetFields();
        }else{
            form.resetFields();
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
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                        },
                    ]}
                    name="username"
                >
                    <Input
                        type="text"
                        placeholder={t(GLOBAL_CLIENT.username)} />
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
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                        },
                    ]}
                    name="email"
                >
                    <Input
                        type="email"
                        placeholder={t(GLOBAL_CLIENT.email)}
                    />
                </Form.Item>
                <Form.Item
                    rules={[
                        {
                            required: true,
                            message: t(GLOBAL_CLIENT.vuilongnhapdulieu),
                        },
                    ]}
                    name="full_name"
                >
                    <Input
                        type="text"
                        placeholder={t(GLOBAL_CLIENT.fullname)}
                    />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        {t(GLOBAL_CLIENT.register)}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
});

export default Register;

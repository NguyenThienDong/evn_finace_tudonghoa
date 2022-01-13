import React, { useState, useRef } from 'react';
import { Tooltip, Drawer, Tabs, Upload, Alert, Button, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../../stores/hooks';
import { TAB_SIZE, UPLOAD_FILE_PNG } from '../../../helpers/constants';
import { convertBase64 } from '../../../helpers/functions';
import AuthStoreContext from '../../../stores/AuthStore';
import './style.css';
import {
    UserOutlined,
    EditOutlined,
    MailOutlined,
    InboxOutlined,
    SaveOutlined,
    ClearOutlined,
    CloseOutlined,
} from '@ant-design/icons';
import SignatureCanvas from 'react-signature-canvas';
const { TabPane } = Tabs;
const { Dragger } = Upload;
const InfoUser = observer((props) => {
    const AuthStore = useStore(AuthStoreContext);

    const { onClose, visible, user_info, onLoadInfo } = props;
    const [imageURL, setImageURL] = useState(null);
    const [loading, setLoading] = useState(false);
    const [bigSize, setBigSize] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const handleChangeUpload = async (info) => {
        const { size, name, type } = info.file;
        if (size > 2000000) {
            setBigSize(true);
        } else {
            setBigSize(false);
            const digital_signature = await convertBase64(info.file);
            upLoadSignature(digital_signature);
        }
    };
    const DropUpload = async (e) => {
        const { size, name, type } = e.dataTransfer.files[0];
        const nameImage = name.split('.');
        const typeDoc = type.split('/');
        if (size > 2000000) {
            setBigSize(true);
        } else {
            setBigSize(false);
            const digital_signature = await convertBase64(
                e.dataTransfer.files[0]
            );
            upLoadSignature(digital_signature);
        }
    };
    const propss = {
        name: 'file',
        multiple: true,
    };

    const sigCanvas = useRef({});

    const clear = () => sigCanvas.current.clear();

    const upLoadSignature = async (digital_signature) => {
        setLoading(true);
        const result = await AuthStore.action_addSignature(digital_signature);
        if (result) {
            clear();
            setLoading(false);
            onLoadInfo();
        } else {
            setLoading(false);
        }
    };

    const save = async () => {
        const digital_signature = sigCanvas.current
            .getTrimmedCanvas()
            .toDataURL('image/png');
        // const typeDoc = "png";
        // const name = "chuky"
        setImageURL(digital_signature);
        upLoadSignature(digital_signature);
    };
    const callback = (key) => {
        console.log(key);
    };
    return (
        <Drawer
            title="Thông tin tài khoản"
            placement="right"
            onClose={onClose}
            visible={visible}
            width={520}
            className="user-infor-draw"
        >
            <p>
                <img className="signatureImg" src={user_info?.avatar} />
            </p>
            <p>Họ và tên : {user_info?.full_name}</p>
            <p>Email : {user_info?.email}</p>
            <p>Chức vụ : {user_info?.job_position}</p>
            <p>
                Chữ ký :
                <img
                    className="signatureImg"
                    src={user_info?.digital_signature}
                />
                <Button
                    style={{ marginLeft: '5px' }}
                    type="primary"
                    onClick={() => setIsEdit(!isEdit)}
                    icon={isEdit ? <CloseOutlined /> : <EditOutlined />}
                />
            </p>
            {isEdit ? (
                <Spin spinning={loading}>
                    <Tabs defaultActiveKey="2" onChange={callback}>
                        <TabPane tab="Ký trực tiếp" key="2">
                            <SignatureCanvas
                                ref={sigCanvas}
                                canvasProps={{
                                    height: 200,
                                    className: 'signatureCanvas',
                                }}
                            />
                            <Button
                                type="dashed"
                                onClick={save}
                                icon={<SaveOutlined />}
                            >
                                Save
                            </Button>
                            <Button
                                type="primary"
                                onClick={clear}
                                icon={<ClearOutlined />}
                            >
                                Clear
                            </Button>
                            {/* <button onClick={save}>Save</button>
                        <button onClick={clear}>Clear</button> */}
                        </TabPane>
                        <TabPane tab="Tải chữ ký lên" key="3">
                            {bigSize ? (
                                <Alert
                                    message="File ảnh phải nhỏ hơn 2Mb"
                                    type="error"
                                    style={{ marginBottom: '10px' }}
                                />
                            ) : null}
                            <Dragger
                                {...propss}
                                beforeUpload={() => false}
                                onDrop={DropUpload}
                                onChange={handleChangeUpload}
                                accept={UPLOAD_FILE_PNG}
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">
                                    Click or drag file to this area to upload
                                </p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload.
                                    Strictly prohibit from uploading company
                                    data or other band files
                                </p>
                            </Dragger>
                        </TabPane>
                    </Tabs>
                </Spin>
            ) : null}
        </Drawer>
    );
});
export default InfoUser;

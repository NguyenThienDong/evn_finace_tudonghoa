import { useState } from 'react';
import { LoadingOutlined, CloudUploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { GLOBAL_CLIENT } from '../../helpers/GlobalClient';
import { useStore } from '../../stores/hooks';
import { UPLOAD_FILE_EXCEL_TYPE } from '../../helpers/constants';
import { readFileToBase64 } from '../../helpers/functions';
import AuthStoreContext from '../../stores/AuthStore';

const UploadExcel = observer((props) => {
    console.log(props)
    const { handleImageChange, imageUrl, classImage, className, disabled } =
        props;

    const AuthStore = useStore(AuthStoreContext);
    const [loading, set_loading] = useState(false);
    const { t } = useTranslation();

    const handleUpload = async (e) => {
        const file = await readFileToBase64(e.file);

        if (file) {
            const base64 = file.split(',')[1];

            set_loading(true);

            const fileName = new Date().getTime();
            const result = await AuthStore.action_uploadImage(fileName, base64);

            if (result) {
                handleImageChange(result);
            }

            set_loading(false);
        }
    };

    const renderUpload = () => {
        return (
            <>
                <Upload.Dragger
                    accept={UPLOAD_FILE_EXCEL_TYPE}
                    showUploadList={false}
                    listType="picture-card"
                    customRequest={handleUpload}
                    disabled={disabled}
                    // beforeUpload={() => false}
                >
                    <p className="ant-upload-drag-icon">
                        {loading ? (
                            <LoadingOutlined />
                        ) : (
                            <CloudUploadOutlined />
                        )}
                    </p>
                    <p className="ant-upload-text">
                        Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload.
                    </p>
                </Upload.Dragger>
                {/* {loading ? <LoadingOutlined /> : <CloudUploadOutlined />} */}
            </>
        );
    };

    return (
        <>
            {/* // <Upload
        //     accept={UPLOAD_FILE_EXCEL_TYPE}
        //     showUploadList={false}
        //     listType="picture-card"
        //     customRequest={handleUpload}
        //     disabled={disabled}
        // > */}
            {renderUpload()}
            {/* </Upload> */}
        </>
    );
});

export { UploadExcel };

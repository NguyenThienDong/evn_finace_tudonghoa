import CKEditor from "ckeditor4-react";
// import { CONFIG_URL } from "../../helpers/constants";

const CKEditorCustom = (props) => {
    const { data, onChange } = props;

    return (
        <CKEditor
            data={data}
            onChange={(_e) => {
                const value = _e.editor.getData();
                // setDes(value);
                onChange(value);
            }}
            // config={{
            //     filebrowserUploadUrl: `${CONFIG_URL.SERVICE_URL}upload`,
            // }}
        />
    );
};

export { CKEditorCustom };

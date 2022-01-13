import { Spin } from 'antd';

export const Loading = (props) => {
    if (props.isLoading === false) {
        return null;
    }

    return (
        <div className="loading">
            <Spin tip="Loading..." size="large" className="spinner" />
        </div>
    );
};

import React from "react";
import { Button, Descriptions } from "antd";
import {
  DownloadOutlined,
  PlusOutlined,
  UploadOutlined,
  RollbackOutlined
} from "@ant-design/icons";
import PageTopic from "./PageTopic";

const PageHeader = (props) => {
  const { title, label, detail, btnTitle, btnTitle1, btnTitle2, showBtn, btnSubmitTitle, showBtnNew, onClickBack, btnBack, showBtnIX } =
    props;
  const renderBtn = () => {
    if(showBtn) {
      return (
        <>
          {btnTitle2 && (
            <Button
              className="gx-btn gx-btn-primary gx-m-2"
              icon={<UploadOutlined />}
              key={"btnTitle2"}
              onClick={props.onClick2}
            >
              <span className="gx-text-uppercase">{btnTitle2}</span>
            </Button>
          )}
          {btnTitle1 && (
            <Button
              className="gx-btn gx-btn-primary gx-m-0"
              icon={<DownloadOutlined />}
              key={"btnTitle1"}
              onClick={props.onClick1}
            >
              <span className="gx-text-uppercase">{btnTitle1}</span>
            </Button>
          )}
          <Button
            className="gx-btn gx-btn-primary gx-mr-0 gx-ml-2 gx-mt-0 gx-mb-0"
            icon={<PlusOutlined />}
            key={"created"}
            onClick={props.onClick}
          >
            <span className="gx-text-uppercase">{btnTitle}</span>
          </Button>
        </>
      )
    } else if (showBtnNew) {
      return (
        <>
          <Button
            className="gx-btn gx-mr-0 gx-ml-2 gx-mt-0 gx-mb-0"
            icon={<RollbackOutlined />}
            key={"created"}
            onClick={onClickBack}
          >
            <span className="gx-text-uppercase">{btnBack}</span>
          </Button>
          <Button
            className="gx-btn gx-btn-primary gx-mr-0 gx-ml-2 gx-mt-0 gx-mb-0"
            icon={<PlusOutlined />}
            key={"btnSubmitTitle"}
            htmlType="submit"
          >
            <span className="gx-text-uppercase">{btnSubmitTitle}</span>
          </Button>
        </>
      )
    } else if (showBtnIX) {
      return (
        <>
          {btnTitle2 && (
            <Button
              className="gx-btn gx-btn-primary gx-m-2"
              icon={<UploadOutlined />}
              key={"btnTitle2"}
              onClick={props.onClick2}
            >
              <span className="gx-text-uppercase">{btnTitle2}</span>
            </Button>
          )}
          {btnTitle1 && (
            <Button
              className="gx-btn gx-btn-primary gx-m-0"
              icon={<DownloadOutlined />}
              key={"btnTitle1"}
              onClick={props.onClick1}
            >
              <span className="gx-text-uppercase">{btnTitle1}</span>
            </Button>
          )}
        </>
      )
    }
  }
  return (
    <PageTopic
      title={title}
      extra={[
        renderBtn()
      ]}
    >
      <Descriptions size="small">
        <Descriptions.Item label={label}>{detail}</Descriptions.Item>
      </Descriptions>
    </PageTopic>
  );
};

PageHeader.propTypes = {};

export default PageHeader;

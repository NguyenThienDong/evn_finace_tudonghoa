import React, {Component} from "react";
import {PageHeader} from "antd";
import './index.css';

class PageTopic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageHeader className="gx-page-topic"
                  ghost={false}
                  title={this.props.title}
                  extra={this.props.extra}>
        {this.props.children}
      </PageHeader>
    );
  }
}

export default PageTopic;

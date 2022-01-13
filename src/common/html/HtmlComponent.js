import ReactHtmlParser from "react-html-parser";

const HtmlComponent = (props) => {
    const { html } = props;

    if (!html) {
        return null;
    }

    return <div className="html-container">{ReactHtmlParser(html)}</div>;
};

export default HtmlComponent;

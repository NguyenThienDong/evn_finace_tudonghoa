import { observer } from 'mobx-react-lite';

const Header = observer((props) => {
    const { title1, description } = props;
    return (
        <>
            {/* <Loading isLoading={isLoading} /> */}
            {/* <h2 className="head-title">{t(GLOBAL_CLIENT.txtList)}</h2> */}
            {/* Show total member */}
            <div className="box-header">
                <div className="title-header">{title1}</div>
            </div>
            <p>{description}</p>
        </>
    );
});

export default Header;

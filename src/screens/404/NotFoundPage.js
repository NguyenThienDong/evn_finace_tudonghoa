import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div className="gx-page-error-container">
        <div className="gx-page-error-content">
            <div className="gx-error-code gx-mb-4">404</div>
            <h2 className="gx-text-center">Not found</h2>
            <form className="gx-mb-4" role="search">
                <div className="gx-search-bar">
                    <div className="gx-form-group">
                        <button className="gx-search-icon">
                            <i className="icon icon-search" />
                        </button>
                    </div>
                </div>
            </form>
            <p className="gx-text-center">
                <Link className="gx-btn gx-btn-primary" to="/home">
                    Go Home
                </Link>
            </p>
        </div>
    </div>
);

export default NotFoundPage;

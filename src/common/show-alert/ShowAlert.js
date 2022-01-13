import { useHistory } from 'react-router-dom';
import { showConfirmAlert, showSuccessAlert } from '../../helpers/functions';

function ShowAlert({ title1, title2 }) {
    const history = useHistory();

    return (
        <>
            {showConfirmAlert(title1).then(async (rs) => {
                if (rs.isConfirmed) {
                    showSuccessAlert(title2).then(() => {
                        history.goBack();
                    });
                }
            })}
        </>
    );
}

export default ShowAlert;

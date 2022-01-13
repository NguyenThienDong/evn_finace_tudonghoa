
import { observer } from 'mobx-react-lite';

const Navbar = observer((props) => {
    const arr = [1,2,3,4]
    return (
        <>
             {/* <div className='oder-tilte'>
            </div> */}
            <div className='oder-box-partner box-radius'>
                <div className='box-total'>
                    <label>DOANH THU</label>
                    <h3>12,000,000 $</h3>
                    <label>Cập nhật: 07/10/2021</label>
                </div>
                <div className='box-pending'>
                    <label>ĐƠN CHỜ DUYỆT</label>
                    <h3>125 ĐƠN</h3>
                    <label>Cập nhật: 07/10/2021</label>
                </div>
                <div className='box-sale'>
                    <label>ĐƠN ĐÃ BÁN</label>
                    <h3>255 ĐƠN</h3>
                    <label>Cập nhật: 07/10/2021</label>
                </div>
                <div className='box-cancelled'>
                    <label>ĐƠN BỊ HỦY</label>
                    <h3>25 ĐƠN</h3>
                    <label>Cập nhật: 07/10/2021</label>
                </div>

            </div>
        </>
    );
});

export default Navbar;

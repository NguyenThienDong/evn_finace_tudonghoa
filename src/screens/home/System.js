
import { observer } from 'mobx-react-lite';
import { Bar } from "react-chartjs-2";


const System = observer((props) => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <>

            {
                arr && arr.map(() => (
                    <div className='total'>
                        <div className='circle'>
                            <p>12 PM</p>
                        </div>

                        <div className="order">
                            <h1>Hệ thống</h1>
                            <p>Đơn hàng <span> #abcde </span> đã được từ chối bởi
                                <span> NguyenLuong2000 </span>
                            </p>
                        </div>

                    </div>
                ))
            }




        </>
    );
});

export default System;
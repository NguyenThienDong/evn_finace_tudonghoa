import { Button, Col, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import Chart from './Chart';
import Navbar from './Navbar';
import Notifi from './Notifi';

const Home = observer((props) => {
    return (
        <>
            <Row gutter={[10, 10]}>
                <Col xs={24} md={24}>
                    <div className='oder-management'>
                        <div className='oder-header'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='home-body'>
                        <div className='body-left'>
                            <Chart />
                        </div>

                        <div className='body-right'>
                            <Notifi />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
});

export default Home;

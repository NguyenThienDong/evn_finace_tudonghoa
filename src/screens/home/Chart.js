import { observer } from 'mobx-react-lite';
import { Bar } from 'react-chartjs-2';

const Chart = observer((props) => {
    return (
        <>
            <div className='container-chart'>
                <div>
                    <h1>Thống kê đơn hàng</h1>
                </div>

                <div>
                    <h3>Cập nhật mới nhất</h3>
                </div>
                <div style={{ height: 'auto' }}>
                    <Bar
                        data={{
                            labels: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                'Jul',
                                'Aug',
                                'Sep',
                                'Oct',
                                'Nov',
                                'Dec',
                            ],
                            datasets: [
                                {
                                    label: 'Population (millions)',
                                    backgroundColor: [
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF5A32',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                        '#FF9A82',
                                    ],
                                    backgroundBarRadius: 9,
                                    data: [
                                        1, 1, 1, 1, 1, 1, 1, 1, 1, 180, 3, 5,
                                    ],
                                },
                            ],
                        }}
                        options={{
                            barPercentage: 9,
                            barThickness: 10,
                            pointHitRadius: 5,
                            pointRadius: 10,
                            responsive: true,
                            // borderColor: `red`,,
                            legend: { display: false },
                            title: {
                                display: true,
                                text: 'Predicted world population (millions) in 2050',
                            },
                            scales: {
                                xAxes: [
                                    {
                                        type: 'category',
                                        stacked: true,
                                        ticks: { mirror: true, stepSize: 0.5 },
                                    },
                                ],
                                yAxes: [
                                    { stacked: true, ticks: { mirror: true } },
                                ],
                            },
                        }}
                    />
                </div>
            </div>
        </>
    );
});

export default Chart;

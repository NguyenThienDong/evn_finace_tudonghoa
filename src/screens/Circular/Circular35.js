import {
    Row,
    Col,
    Form,
    Input,
    Select,
    DatePicker,
    Transfer,
    Table,
    Divider,
    Button,
} from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import * as Const from './Consts';
import PrintIcon from '../../common/Icons/PrintIcon';
import { PrinterFilled } from '@ant-design/icons';
import ExportIcon from '../../common/Icons/ExportIcon';
import CheckDataIcon from '../../common/Icons/CheckDataIcon';
import { renderPagination } from '../../helpers/functions';
import { PAGE_START } from '../../helpers/constants';

const { Option, OptGroup } = Select;
const Circular35 = observer((props) => {
    const [value, setValue] = useState([1, 2, 3, 5, 8]);
    const [form] = Form.useForm();
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(PAGE_START);
    const onChange = (value) => console.log('value: ', value);
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    const data = [1, 2, 3, 5, 8];

    const onChangePage = (page) => {
        setPage(page);
    };

    const onChangePageSize = (current, size) => {
        setPageSize(size);
        setPage(PAGE_START);
    };

    const selectProps = {
        mode: 'multiple',
        style: {
            width: '100%',
        },
        value,
        options: data,
        onChange: (newValue) => {
            setValue(newValue);
        },
        placeholder: 'Select Item...',
        maxTagCount: 'responsive',
    };

    return (
        <Row gutter={[10, 10]}>
            <Col md={24}>
                <div className='box-radius'>
                    <h2>Báo cáo thông số 35</h2>
                    <hr />
                    <Form layout='vertical' form={form}>
                        <div className='flex-between'>
                            <Col md={8}>
                                <Form.Item
                                    name='perload_time'
                                    label='PerloadTime'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder='Chọn'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                    >
                                        <Option value='1'>Month</Option>
                                        <Option value='2'>May</Option>
                                        <Option value='3'>Messi</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={8}>
                                <Form.Item
                                    name='group'
                                    label='Group'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder='Chọn'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                    >
                                        <Option value='1'>Month</Option>
                                        <Option value='2'>May</Option>
                                        <Option value='3'>Messi</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={8}>
                                <Form.Item
                                    name='typeofreport'
                                    label='Type of report'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder='Chọn'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                    >
                                        <Option value='1'>Month</Option>
                                        <Option value='2'>May</Option>
                                        <Option value='3'>Messi</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </div>

                        <div className='flex-between'>
                            <Col md={8}>
                                <Form.Item
                                    name='report_date'
                                    label='Report Date'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        onChange={onChangeDate}
                                        className='w-100'
                                    />
                                </Form.Item>
                            </Col>
                            <Col md={8}>
                                <Form.Item
                                    name='begin_date_of_perlod'
                                    label='Begin Date Of Perlod'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <DatePicker
                                        onChange={onChangeDate}
                                        className='w-100'
                                    />
                                </Form.Item>
                            </Col>
                            <Col md={8}>
                                <Form.Item
                                    name='status'
                                    label='Status'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder='Chọn'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                    >
                                        <Option value='1'>Month</Option>
                                        <Option value='2'>May</Option>
                                        <Option value='3'>Messi</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </div>

                        <div className='flex-between'>
                            <Col md={8}>
                                <Form.Item
                                    name='user'
                                    label='User'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder='Chọn'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                    >
                                        <Option value='1'>Month</Option>
                                        <Option value='2'>May</Option>
                                        <Option value='3'>Messi</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={8}>
                                <Form.Item
                                    name='dsbaocao'
                                    label='Danh sách báo cáo'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        mode='multiple'
                                        placeholder='Chọn'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                        maxTagCount={'responsive'}
                                    >
                                        <OptGroup label='Danh sách báo cáo TT35'>
                                            <Option value='1'>Month</Option>
                                            <Option value='2'>May</Option>
                                            <Option value='3'>Messi</Option>
                                            <Option value='4'>Month</Option>
                                            <Option value='5'>May</Option>
                                            <Option value='6'>Messi</Option>
                                            <Option value='7'>Month</Option>
                                            <Option value='8'>May</Option>
                                            <Option value='9'>Messi</Option>
                                        </OptGroup>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col md={8}>
                                <Form.Item
                                    name='chinhanh'
                                    label='Chi nhánh'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng nhập dữ liệu!',
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch
                                        placeholder='Chọn'
                                        mode='tags'
                                        optionFilterProp='children'
                                        onChange={onChange}
                                        filterOption={(input, option) =>
                                            option.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >=
                                            0
                                        }
                                    >
                                        <Option value='1'>Month</Option>
                                        <Option value='2'>May</Option>
                                        <Option value='3'>Messi</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </div>
                    </Form>
                    <Divider>
                        <div className='flex-form'>
                            <Button type='primary' className='button-evn'>
                                <CheckDataIcon /> Check Data
                            </Button>
                            <Button
                                type='primary'
                                className='button-default'
                                icon={<PrinterFilled />}
                            >
                                Print to Excel Template
                            </Button>
                            <Button type='primary' className='button-action'>
                                <ExportIcon color='#fff' /> Export to Excel
                            </Button>
                        </div>
                    </Divider>
                    <Table
                        className='table-budget'
                        pagination={false}
                        columns={Const.columns}
                        dataSource={Const.data}
                        bordered
                        scroll={{ x: 1000 }}
                    />
                    {renderPagination(
                        data,
                        0,
                        pageSize,
                        40,
                        onChangePage,
                        onChangePageSize
                    )}
                </div>
            </Col>
        </Row>
    );
});

export default Circular35;

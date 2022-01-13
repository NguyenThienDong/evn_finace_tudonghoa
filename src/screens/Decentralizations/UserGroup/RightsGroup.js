import {
    DeleteFilled,
    DeleteOutlined,
    DeleteTwoTone,
    EditTwoTone,
    PlusOutlined,
    PrinterFilled,
} from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row, Select, Table } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import CheckDataIcon from '../../../common/Icons/CheckDataIcon';
import ExportIcon from '../../../common/Icons/ExportIcon';
import { PAGE_START } from '../../../helpers/constants';
import { renderPagination } from '../../../helpers/functions';

const { Option, OptGroup } = Select;
const RightsGroup = observer((props) => {
    const [form] = Form.useForm();
    const [pageSize, setPageSize] = useState(10);
    const [page, setPage] = useState(PAGE_START);

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onChangePage = (page) => {
        setPage(page);
    };

    const onChangePageSize = (current, size) => {
        setPageSize(size);
        setPage(PAGE_START);
    };

    const columns = [
        {
            title: 'Code',
            dataIndex: 'code',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'UserId',
            dataIndex: 'user_id',
        },
        {
            title: 'Mã báo cáo',
            dataIndex: 'mabaocao',
        },
        {
            title: 'Thao tác',
            dataIndex: 'thaotac',
            align: 'center',
            render: (value, record) => (
                <>
                    <Button
                        type='primary'
                        className='btn-update'
                        icon={<EditTwoTone />}
                    ></Button>
                    <Button
                        type='primary'
                        danger
                        className='btn-delete'
                        icon={<DeleteTwoTone twoToneColor='#ef1717' />}
                    ></Button>
                </>
            ),
        },
    ];

    const data = [
        {
            code: 'CDTV1',
            name: 'Báo cáo 1',
            user_id: 'dongnt',
            mabaocao: 'BC-001',
        },
        {
            code: 'CDTV2',
            name: 'Báo cáo 2',
            user_id: 'anpx',
            mabaocao: 'BC-002',
        },
    ];

    return (
        <Row gutter={[10, 10]}>
            <Col md={24}>
                <div className='box-radius'>
                    <h2>Danh sách nhóm quyền</h2>
                    <hr className='mt-3' />
                    <div className='flex-between mt-3'>
                        <Col md={16}>
                            <Row>
                                <Col md={8}>
                                    <Input placeholder='Chọn code' />
                                </Col>
                                <Col md={8}>
                                    <Input placeholder='Nhập tên' />
                                </Col>
                                <Col md={8}>
                                    <Select
                                        placeholder='Chọn UserID'
                                        onChange={handleChange}
                                        className='w-100'
                                    >
                                        <Option value='dongnt'>dongnt</Option>
                                        <Option value='anpx'>anpx</Option>
                                        <Option value='hoantv'>hoantv</Option>
                                        <Option value='ducna'>ducna</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <div>
                            <Button
                                type='primary'
                                className=''
                                icon={<PlusOutlined />}
                            >
                                Thêm mới
                            </Button>
                        </div>
                    </div>

                    <Table
                        className='table-budget mt-3'
                        pagination={false}
                        columns={columns}
                        dataSource={data}
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

export default RightsGroup;

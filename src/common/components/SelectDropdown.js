import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, Row, Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';

const { Option } = Select;

const SelectDropdown = observer((props) => {
    const { placeholder, label, msg, showData, onClick, name, defaultValueSelect } = props;
    console.log("showData", defaultValueSelect);
    const onHangleChange = (value) => {
        console.log(value);
        props.onHangleChange(value);
    };

    return (
        <Input.Group compact label={label}>
            <Form.Item
                label={label}
                name={name}
                rules={[
                    {
                        required: true,
                        message: msg,
                    },
                ]}
            >
                <Select
                    showSearch
                    placeholder={placeholder}
                    onChange={onHangleChange}
                    defaultValue={defaultValueSelect ? defaultValueSelect : ""}
                    style={{ width: '90%' }}
                    dropdownRender={(menu) => (
                        <>
                            {menu}
                            <Divider style={{ margin: '4px 0' }} />
                        </>
                    )}
                >
                    {showData &&
                        showData.map((item) => (
                            <Option key={item.value} value={item.value}>
                                {item.key}
                            </Option>
                        ))}
                </Select>
            </Form.Item>
            <Button
                type="primary"
                onClick={onClick}
                style={{ width: '10%' }}
            >
                <PlusOutlined />
            </Button>
        </Input.Group>
    );
});

export default SelectDropdown;

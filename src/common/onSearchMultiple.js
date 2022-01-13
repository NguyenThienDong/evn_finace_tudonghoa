import { Button, Select } from 'antd';
import { isEmpty } from 'lodash';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { convertStringToKey } from '../helpers/functions';
import './style.css';
const { Option } = Select;

const OnSearchMultiple = observer((props) => {
    const { getData, dataOption, className } = props;
    const [txtSearch, setTxtSearch] = useState('');
    const [multipleSearch, setMultipleSearch] = useState();
    const convertStringToJson = () => {
        if (!isEmpty(multipleSearch)) {
            var newArr = [];
            for (var i = 0; i < multipleSearch.length; i++) {
                let arr = multipleSearch[i].split(':');

                if (convertStringToKey(arr[0]) === 'madonvi') {
                    newArr.push({
                        key: 'unit_code',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'tendonvi') {
                    newArr.push({
                        key: 'unit_name',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'taikhoan') {
                    newArr.push({
                        key: 'expense_code',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'taikhoanchiphi') {
                    newArr.push({
                        key: 'expense_account',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'tenchiphi') {
                    newArr.push({
                        key: 'expense_name',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'linengansach') {
                    newArr.push({
                        key: 'line_code' || 'current_line_code',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'matotrinh') {
                    newArr.push({
                        key: 'form_code',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'tieude') {
                    newArr.push({
                        key: 'title',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'noidung') {
                    newArr.push({
                        key: 'proposed_basis',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'noidungdexuat') {
                    newArr.push({
                        key: 'recommended_content',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'pheduyettieptheo') {
                    newArr.push({
                        key: 'next_approved_by',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'trangthai') {
                    newArr.push({
                        key: 'status',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'mathanhtoan') {
                    newArr.push({
                        key: 'order_code',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'noidungthanhtoan') {
                    newArr.push({
                        key: 'order_content',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'loaitotrinh') {
                    newArr.push({
                        key: 'form_type',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'matotrinh') {
                    newArr.push({
                        key: 'form_code',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'cancudexuat') {
                    newArr.push({
                        key: 'proposed_basis',
                        value: arr[1].trim(),
                    });
                } else if (convertStringToKey(arr[0]) === 'maquyettoan') {
                    newArr.push({
                        key: 'set_code',
                        value: arr[1].trim(),
                    });
                } 
            }
            getData(newArr);
        } else {
            getData([]);
        }
    };

    const handleChange = (value) => {
        console.log('value', value);
        setMultipleSearch(value);
        setTxtSearch('');
    };
    const handleSelectSearch = (e) => {
        setTxtSearch(e);
    };
    return (
        <>
            <Select
                mode="multiple"
                placeholder="Tìm kiếm"
                style={{ width: '100%' }}
                onSearch={handleSelectSearch}
                onChange={handleChange}
            >
                {dataOption &&
                    dataOption.map((item) => (
                        <Option
                            value={`${item}: ${txtSearch}`}
                            disabled={txtSearch === ''}
                        >
                            {item}: {txtSearch}
                        </Option>
                    ))}
            </Select>
            <Button
                className="color-btn-evn ml-3"
                type="primary"
                onClick={convertStringToJson}
            >
                Tìm kiếm
            </Button>
        </>
    );
});

export default OnSearchMultiple;

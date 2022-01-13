import {
    CheckCircleFilled,
    CloseCircleFilled,
    ExclamationCircleFilled,
    PlusCircleFilled,
} from '@ant-design/icons';
import {
    Avatar,
    Badge,
    message,
    Modal,
    Pagination,
    Popover,
    notification,
    Tag,
} from 'antd';
import _ from 'lodash';
import moment from 'moment';
import { userInfo } from 'os';
import Swal from 'sweetalert2';
import {
    COMMON_STATUS,
    CONFIG_URL,
    DATE_FORMAT_BACKEND,
    DATE_FORMAT_CLIENT,
    DATE_TIME_FORMAT_BACKEND,
    DATE_TIME_FORMAT_CLIENT,
    ERROR_CODES,
    GENDER,
    LOCAL_STORAGE,
    PAGE_SIZE_OPTIONS,
    STATUS_APPROVE,
    STATUS_YOUSIM,
    TAB_SIZE,
} from './constants';
import { GLOBAL_CLIENT } from './GlobalClient';

export const showWarning = (msg) => {
    return Swal.fire({
        icon: 'warning',
        title: msg.replace(/\[ERR_[0-9]+\]/g, ''),
    });
};

export const showError = (msg) => {
    console.log('error', msg);
};

export const showErrorAlert = (msg) => {
    return Swal.fire({
        icon: 'error',
        title: msg.replace(/\[ERR_[0-9]+\]/g, ''),
    });
};

export const showNetworkError = () => {
    return showErrorAlert('Vui lòng kiểm tra lại kết nối');
};
export const openNotificationWithIcon = (type, mess) => {
    notification[type]({
        message: 'Lỗi!',
        description: mess,
    });
};
export const showConFirmAlertRedirect = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success colorButton',
            denyButton: 'btn btn-danger colorButton',
        },
        buttonsStyling: false,
    });
    return swalWithBootstrapButtons.fire({
        title: 'Tạo đề nghị tạm ứng / thanh toán',
        icon: 'question',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Tạo đề nghị tạm ứng',
        denyButtonText: `Tạo đề nghị thanh toán`,
    });
};

export const showSuccessAlert = (msg, text = '') => {
    return Swal.fire({
        icon: 'success',
        title: msg.replace(/\[ERR_[0-9]+\]/g, ''),
        text: text.replace(/\[ERR_[0-9]+\]/g, ''),
    });
};
export const showConfirmAlert = (msg) => {
    return Swal.fire({
        text: msg,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#005aa6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Đồng ý',
        cancelButtonText: 'Hủy bỏ',
    });
};
export const callbackWithAlert = (result, callback) => {
    if (!_.isEmpty(result)) {
        if (result.code === ERROR_CODES.SUCCESS) {
            Swal.fire({
                icon: 'success',
                title: result.msg.replace(/\[ERR_[0-9]+\]/g, ''),
                allowOutsideClick: false,
            }).then(callback);
        } else {
            showErrorAlert(result.msg);
        }
    } else {
        showNetworkError();
    }
};

// showModal

export const showNotifyAlert = (icon, title, text, confirmButtonText) => {
    return Swal.fire({
        icon,
        title,
        text,
        confirmButtonText,
    });
};

export const showNotifySuccess = (position, icon, title, showConfirmButton) => {
    Swal.fire({
        position,
        icon,
        title,
        showConfirmButton,
        timer: 1500,
    });
};

export const removeAccents = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        ' '
    );
    return str;
};

export const checkNextApproved = (nextApproved) => {
    if (nextApproved) {
        return getUserInfo() === nextApproved ? true : false;
    }
};

export const checkSubmitedBy = (submitted_by) => {
    if (submitted_by) {
        return getUserInfo() === submitted_by ? true : false;
    }
};

export const renderFullName = () => {
    const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_INFO));
    if (userInfo) {
        return userInfo.full_name;
    }
};
export const renderDepartmentName = () => {
    const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_INFO));
    if (userInfo) {
        return userInfo.department_name;
    }
};
export const getUserInfo = () => {
    const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_INFO));
    if (userInfo) {
        return userInfo.user_name;
    }
};

export const removeSpace = (txt) => {
    return txt.replace(/\s+/g, '');
};
export const convertBase64 = async (file) => {
    return await new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};
export const convertStringToKey = (data) => {
    return removeSpace(removeAccents(data)).toLowerCase();
};

export const showMessageError = (msg) => {
    Modal.error({
        content: msg,
    });
};
export const disabledDate = (current) => {
    return current && current < moment().add(-1, 'days');
};
export const limitText = (length, str) => {
    if (str) {
        return str.length >= length ? str.substring(0, length) + '...' : str;
    }
};
export const showMessageSuccess = (msg) => {
    Modal.success({
        content: msg,
    });
};
export const showMessageInfo = (msg) => {
    message.info(msg);
};

export const showImage = (path) => {
    return `${CONFIG_URL.SERVICE_URL}${path}`;
};

export const renderValueObject = (obj) => {
    const value =
        obj &&
        obj.map((item) => {
            return item.value;
        });
    return value;
};

export const renderTitleObject = (obj) => {
    const title =
        obj &&
        obj.map((item) => {
            return item.title;
        });
    return title;
};

export const renderKeyObject = (obj) => {
    const title =
        obj &&
        obj.map((item) => {
            return {
                ...item,
                key: item.id,
            };
        });
    return title;
};
export const renderIdObject = (obj) => {
    const listId =
        obj &&
        obj.map((item) => {
            return {
                id: item.id,
            };
        });
    return listId;
};

export const renderPagination = (
    data,
    page,
    pageSize,
    totalItem,
    onChangePage,
    onChangePageSize,
    nameData
) => {
    return (
        <div
            className='gx-bg-white'
            style={{
                display: 'flex',
                justifyContent: 'end',
                paddingLeft: '16px',
            }}
        >
            <div className='gx-d-flex gx-align-items-center gx-justify-content-end gx-p-3'>
                {/* <span style={{ height: 20 }}>Số {nameData} hiển thị trên trang</span> */}
                <Pagination
                    className=''
                    onChange={onChangePage}
                    onShowSizeChange={onChangePageSize}
                    pageSize={pageSize}
                    current={page}
                    showSizeChanger={true}
                    showLessItems={true}
                    showTitle={true}
                    showTotal={false}
                    pageSizeOptions={PAGE_SIZE_OPTIONS}
                    total={totalItem}
                    locale={{ items_per_page: '' }}
                />
            </div>
        </div>
    );
};
export const to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
};

export const getValueLodash = (data, value) => {
    return _.get(data, value);
};

export const findObjectFromArrayLodash = (array, objectFind) => {
    return _.find(array, objectFind);
};

export const showModalSuccess = (mesage, onOK) => {
    Modal.success({
        content: mesage,
        onOk: onOK || null,
    });
};

export const getDateTimeShow = (date) => {
    if (!date) {
        return null;
    }

    const result = moment(date, DATE_TIME_FORMAT_BACKEND).format(
        DATE_TIME_FORMAT_CLIENT
    );

    if (result == 'Invalid date') {
        return null;
    }

    return result;
};

export const getDateShow = (date) => {
    if (!date) {
        return null;
    }

    return moment(date).format(DATE_FORMAT_CLIENT);
};

export const showPrice = (value) => {
    if (value) {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    return 0;
};

export const getDateClientPicker = (value) => {
    if (!value) {
        return null;
    }

    return moment(value, DATE_FORMAT_BACKEND);
};

export const getStatusClientShow = (status) => {
    if (status === COMMON_STATUS.ACTIVE) {
        return true;
    } else if (status === COMMON_STATUS.INACTIVE) {
        return false;
    }

    return null;
};

export const getDateTimeBackend = (value) => {
    if (!value) {
        return null;
    }

    return moment(value).format(DATE_TIME_FORMAT_BACKEND);
};

export const getStatusBackend = (status) => {
    if (status === true || status === 1) {
        return COMMON_STATUS.ACTIVE;
    } else if (status === false || status === 0) {
        return COMMON_STATUS.INACTIVE;
    }

    return null;
};

export const readFileToBase64 = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
};

export const getNameTypeDoc = (arrDocs, id) => {
    let obj = findObjectFromArrayLodash(arrDocs, { id });

    if (obj) {
        return obj.name;
    }

    return null;
};

export const getTextGender = (gender) => {
    if (gender === GENDER.MALE) {
        return GLOBAL_CLIENT.male;
    } else if (gender === GENDER.FEMALE) {
        return GLOBAL_CLIENT.female;
    }

    return '';
};

export const getOffsetLayout = (width) => {
    return width < TAB_SIZE ? 0 : 6;
};

// // convert number to string
export const ChuSo = new Array(
    ' không ',
    ' một ',
    ' hai ',
    ' ba ',
    ' bốn ',
    ' năm ',
    ' sáu ',
    ' bảy ',
    ' tám ',
    ' chín '
);
export const Tien = new Array(
    '',
    ' nghìn',
    ' triệu',
    ' tỷ',
    ' nghìn tỷ',
    ' triệu tỷ'
);

// //1. Hàm đọc số có ba chữ số;
export const DocSo3ChuSo = (baso) => {
    var tram;
    var chuc;
    var donvi;
    var KetQua = '';
    tram = parseInt(baso / 100);
    chuc = parseInt((baso % 100) / 10);
    donvi = baso % 10;
    if (tram == 0 && chuc == 0 && donvi === 0) return '';
    if (tram != 0) {
        KetQua += ChuSo[tram] + ' trăm ';
        if (chuc == 0 && donvi != 0) KetQua += ' linh ';
    }
    if (chuc != 0 && chuc != 1) {
        KetQua += ChuSo[chuc] + ' mươi';
        if (chuc == 0 && donvi != 0) KetQua = KetQua + ' linh ';
    }
    if (chuc == 1) KetQua += ' mười ';
    switch (donvi) {
        case 1:
            if (chuc != 0 && chuc != 1) {
                KetQua += ' mốt ';
            } else {
                KetQua += ChuSo[donvi];
            }
            break;
        case 5:
            if (chuc == 0) {
                KetQua += ChuSo[donvi];
            } else {
                KetQua += ' lăm ';
            }
            break;
        default:
            if (donvi != 0) {
                KetQua += ChuSo[donvi];
            }
            break;
    }
    return KetQua;
};

//2. Hàm đọc số thành chữ (Sử dụng hàm đọc số có ba chữ số)

export const DocTienBangChu = (SoTien) => {
    var lan = 0;
    var i = 0;
    var so = 0;
    var KetQua = '';
    var tmp = '';
    var ViTri = new Array();
    if (SoTien < 0) return 'Số tiền âm !';
    if (SoTien == 0) return 'Không đồng !';
    if (SoTien > 0) {
        so = SoTien;
    } else {
        so = -SoTien;
    }
    if (SoTien > 8999999999999999) {
        //SoTien = 0;
        return 'Số quá lớn!';
    }
    ViTri[5] = Math.floor(so / 1000000000000000);
    if (isNaN(ViTri[5])) ViTri[5] = '0';
    so = so - parseFloat(ViTri[5].toString()) * 1000000000000000;
    ViTri[4] = Math.floor(so / 1000000000000);
    if (isNaN(ViTri[4])) ViTri[4] = '0';
    so = so - parseFloat(ViTri[4].toString()) * 1000000000000;
    ViTri[3] = Math.floor(so / 1000000000);
    if (isNaN(ViTri[3])) ViTri[3] = '0';
    so = so - parseFloat(ViTri[3].toString()) * 1000000000;
    ViTri[2] = parseInt(so / 1000000);
    if (isNaN(ViTri[2])) ViTri[2] = '0';
    ViTri[1] = parseInt((so % 1000000) / 1000);
    if (isNaN(ViTri[1])) ViTri[1] = '0';
    ViTri[0] = parseInt(so % 1000);
    if (isNaN(ViTri[0])) ViTri[0] = '0';
    if (ViTri[5] > 0) {
        lan = 5;
    } else if (ViTri[4] > 0) {
        lan = 4;
    } else if (ViTri[3] > 0) {
        lan = 3;
    } else if (ViTri[2] > 0) {
        lan = 2;
    } else if (ViTri[1] > 0) {
        lan = 1;
    } else {
        lan = 0;
    }
    for (i = lan; i >= 0; i--) {
        tmp = DocSo3ChuSo(ViTri[i]);
        KetQua += tmp;
        if (ViTri[i] > 0) KetQua += Tien[i];
        if (i > 0 && tmp.length > 0) KetQua += ','; //&& (!string.IsNullOrEmpty(tmp))
    }
    if (KetQua.substring(KetQua.length - 1) == ',') {
        KetQua = KetQua.substring(0, KetQua.length - 1);
    }
    KetQua = KetQua.substring(1, 2).toUpperCase() + KetQua.substring(2);
    //.substring(0, 1);//.toUpperCase();// + KetQua.substring(1);
    return KetQua > '0' ? KetQua + ' đồng' : null;
};
export const logOut = () => {
    localStorage.removeItem(LOCAL_STORAGE.TOKEN);
    localStorage.removeItem(LOCAL_STORAGE.USER_INFO);
    // sessionStorage.clear();
    // window.location.reload();
};

export const randomKey = (length) => {
    var result = '';
    var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
        );
    }
    return result;
};

export const statusReport = (record) => {
    switch (record) {
        case STATUS_APPROVE.PHE_DUYET: {
            return (
                <Popover content='ĐÃ PHÊ DUYỆT' placement='bottom'>
                    <CheckCircleFilled
                        className='icon-approve'
                        style={{ color: '#52c41a' }}
                    />
                </Popover>
            );
        }
        case STATUS_APPROVE.TU_CHOI: {
            return (
                <Popover content='TỪ CHỐI' placement='bottom'>
                    <CloseCircleFilled
                        className='icon-approve'
                        style={{ color: '#ff4d4f' }}
                    />
                </Popover>
            );
        }
        case STATUS_APPROVE.CHO_PHE_DUYET: {
            return (
                <Popover content='CHỜ XỬ LÝ' placement='bottom'>
                    <ExclamationCircleFilled
                        className='icon-approve'
                        style={{ color: '#ffc107' }}
                    />
                </Popover>
            );
        }
        // case 'WAIT_APPROVED': {
        //     return (
        //         <Popover content="CHỜ PHÊ DUYỆT" placement="bottom">
        //             <ExclamationCircleFilled
        //                 className="icon-approve"
        //                 style={{ color: '#ffc107' }}
        //             />
        //         </Popover>
        //     );
        // }

        case STATUS_APPROVE.THEM_MOI: {
            return (
                <Popover content='NEW' placement='bottom'>
                    <PlusCircleFilled
                        className='icon-approve'
                        style={{ color: '#038fde' }}
                    />
                </Popover>
            );
        }

        default: {
            return;
        }
    }
};

export const statusYousim = (status) => {
    switch (status) {
        case STATUS_YOUSIM.DA_KHOA: {
            return (
                <Tag color='#ec5656' className='tag-antd'>
                    Đã khóa
                </Tag>
            );
        }
        case STATUS_YOUSIM.HOAT_DONG: {
            return (
                <Tag color='#29CC97' className='tag-antd'>
                    Hoạt động
                </Tag>
            );
        }
        case STATUS_YOUSIM.DA_BAN: {
            return (
                <Tag color='#29CC97' className='tag-antd'>
                    Đã bán
                </Tag>
            );
        }
        case STATUS_YOUSIM.HIEN_THI: {
            return (
                <Tag color='#29CC97' className='tag-antd'>
                    Hiển thị
                </Tag>
            );
        }
        case STATUS_YOUSIM.DA_DAT: {
            return (
                <Tag color='#038FDE' className='tag-antd'>
                    Đã đặt
                </Tag>
            );
        }
        case STATUS_YOUSIM.TRONG_KHO: {
            return (
                <Tag color='#038FDE' className='tag-antd'>
                    Trong kho
                </Tag>
            );
        }
        case STATUS_YOUSIM.TAM_DUNG: {
            return (
                <Tag color='#DFDFDF' className='tag-antd'>
                    Tạm dừng
                </Tag>
            );
        }
        case STATUS_YOUSIM.AN: {
            return (
                <Tag color='#DFDFDF' className='tag-antd'>
                    Ẩn
                </Tag>
            );
        }
        // case 'WAIT_APPROVED': {
        //     return (
        //         <Popover content="CHỜ PHÊ DUYỆT" placement="bottom">
        //             <ExclamationCircleFilled
        //                 className="icon-approve"
        //                 style={{ color: '#ffc107' }}
        //             />
        //         </Popover>
        //     );
        // }

        case STATUS_APPROVE.THEM_MOI: {
            return (
                <Popover content='NEW' placement='bottom'>
                    <PlusCircleFilled
                        className='icon-approve'
                        style={{ color: '#038fde' }}
                    />
                </Popover>
            );
        }

        default: {
            return;
        }
    }
};

export const approver = (record) => {
    record.status === 1 ? (
        <Badge>
            <Popover trigger='click'>
                <Avatar
                    // shape='square'
                    style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        cursor: 'pointer',
                    }}
                >
                    H
                </Avatar>
            </Popover>
            <span style={{ marginLeft: '10px' }}>Trần Văn Hoàn</span>
        </Badge>
    ) : (
        <Badge>
            <Popover trigger='click'>
                <Avatar
                    // shape='square'
                    style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        cursor: 'pointer',
                    }}
                >
                    H
                </Avatar>
            </Popover>
            <span style={{ marginLeft: '10px' }}>Trần Văn Hoàn</span>
        </Badge>
    );
};

export const showData = (arr, ...args) => {
    if (!_.isEmpty(arr)) {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            args = Object.values(arr[i]);
            // Object.keys(arr[i]);
            newArr.push({
                ...args,
            });
        }
        return newArr;
    } else {
        return [];
    }
};

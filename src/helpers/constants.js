import { GLOBAL_CLIENT } from './GlobalClient';

export const LOCAL_STORAGE = {
    DATA_AUTH: 'DATA_AUTH',
    FIRSTLAUNCH: 'FIRSTLAUNCH',
    REMEMBER_ME: 'REMEMBER_ME',
    TOKEN: 'TOKEN',
    USER_INFO: 'USER_INFO',
    DATA_REPORTS: 'DATA_REPORTS',
};

export const STATUS_LOGIN = {
    WAIT_LOGIN: 0,
    ADMIN_LOGIN: 1,
    NOT_LOGIN: 2,
};
// multipleSearch

export const PAYMENT_METHOD = {
    TIEN_MAT: 'CASH_IN_HAND',
    CHUYEN_KHOAN: 'BANK_TRANSFER',
    THE_CONG_TY: 'USE_CCARD',
};

export const STATUS_APPROVE = {
    PHE_DUYET: 'APPROVED',
    TU_CHOI: 'REJECT',
    THEM_MOI: 'NEW',
    CHO_PHE_DUYET: 'SUBMITTED',
    CHAP_NHAN: 'ACCEPTED',
    DA_XU_LY: 'PROCESSED',
    HOAN_THANH: 'DONE',
};

export const STATUS_YOUSIM = {
    HIEN_THI: 'Hiển thị',
    AN: 'Ẩn',

    HOAT_DONG: 'Hoạt động',
    TAM_DUNG: 'Tạm dừng',

    DA_BAN: 'Đã bán',
    TRONG_KHO: 'Trong kho',
    DA_DAT: 'Đã đặt',
    DA_KHOA: 'Đã khóa',

    DA_HUY: 'Đã hủy',
    CHO_DUYET: 'Chờ duyệt',
    DA_DUYET: 'Đã duyệt',
    THANH_CONG: 'Thành công',
};

export const TEXT_EMPTY = '';
export const PAGE_START = 1;
export const PAGE_SIZE = 20;
export const PAGE_SIZE_ALL = 100000;

export const STATUS_ALL = -1;
export const STATUS_ACTIVE = 1;

export const PAGE_SIZE_OPTIONS = [20, 30, 50, 100, 150, 200];
export const CONFIG_URL = {
    SERVICE_URL: `https://api-yousimv2.semob.info/api`,
};

export const ERROR_CODES = {
    SUCCESS: 200,
    REQUEST_FAILED: 0,
    UNAUTHORIZED: 401,
    ERROR_CODE: -1,
};

export const TIME_OUT_API = 30000;

export const TAB_SIZE = 992;

export const PAGE_SIZE_FULL = 1000;

export const PAGE_SIZE_POST = 4;

export const DATE_TIME_FORMAT_BACKEND = 'YYYY-MM-DD HH:mm:ss';

export const DATE_TIME_FORMAT_CLIENT = 'DD-MM-YYYY HH:mm';

export const DATE_FORMAT_CLIENT = 'DD-MM-YYYY';

export const DATE_FORMAT_BACKEND = 'YYYY-MM-DD';

export const COMMON_STATUS = {
    ALL: -1,
    ACTIVE: 1,
    INACTIVE: 0,
};

export const GENDER = {
    MALE: 1,
    FEMALE: 0,
};

export const PHONE_PATTERN = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
export const UPLOAD_FILE_PNG = '.png';
export const UPLOAD_FILE_TYPE = '.jpg,.jpeg,.png';

export const UPLOAD_FILE_EXCEL_TYPE = '.xls,.xlsx,.xlsm';

export const REPORTS = {
    FETCH_ALL_REPORT: 'FETCH_ALL_REPORT',
};

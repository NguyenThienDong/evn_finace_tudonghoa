import axios from "axios";
import {CONFIG_URL, ERROR_CODES, LOCAL_STORAGE, TIME_OUT_API,} from "../helpers/constants";
import {showErrorAlert, showNetworkError, showSuccessAlert} from "../helpers/functions";

export const Request = {
  async header() {
    return axios.create({
      baseURL: CONFIG_URL.SERVICE_URL,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async postChangePass(wsCode, body, url) {
    let json;

    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";
      let valueAsync;

      const rememberMe = await localStorage.getItem(
        LOCAL_STORAGE.REMEMBER_ME
      );

      if (rememberMe === "false") {
        valueAsync = await sessionStorage.getItem(
          LOCAL_STORAGE.DATA_AUT_CHANGEPASS
        );
      } else {
        valueAsync = await localStorage.getItem(
          LOCAL_STORAGE.DATA_AUT_CHANGEPASS
        );
      }

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      json = {
        sessionId,
        token,
        wsCode,
        wsRequest: {...body},
      };


      const res = await api.post(url, json, {
        timeout: TIME_OUT_API,
      });

      const {data} = res;
      if (data.errorCode === ERROR_CODES.SUCCESS) {
        const {wsResponse} = data;
        // 
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUT_CHANGEPASS);
        showSuccessAlert(data.message);
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(res.data.message);
        return false
      } else if (res.data.errorCode === ERROR_CODES.LOCKUSER) {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }else {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(
          "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
        );
      } else {
        console.log("Lỗi API: " + error.message);
        showNetworkError();
      }
    }
  },
  
  async resetPass(wsCode, body, url) {
    let json;

    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";
      let valueAsync;

      const rememberMe = await localStorage.getItem(
        LOCAL_STORAGE.REMEMBER_ME
      );

      if (rememberMe === "false") {
        valueAsync = await sessionStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      } else {
        valueAsync = await localStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      }

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      json = {
        sessionId,
        token,
        wsCode,
        wsRequest: {...body},
      };


      const res = await api.post(url, json, {
        timeout: TIME_OUT_API,
      });

      const {data} = res;
      if (data.errorCode === ERROR_CODES.SUCCESS) {
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        
        showErrorAlert(res.data.message);
        return false
      } else if (res.data.errorCode === ERROR_CODES.LOCKUSER) {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }else {
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(
          "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
        );
      } else {
        console.log("Lỗi API: " + error.message);
        showNetworkError();
      }
    }
  },
  async postCheckLogin(wsCode, body, url) {
    let json;

    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";
      let valueAsync;

      const rememberMe = await localStorage.getItem(
        LOCAL_STORAGE.REMEMBER_ME
      );

      if (rememberMe === "false") {
        valueAsync = await sessionStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      } else {
        valueAsync = await localStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      }

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      json = {
        sessionId,
        token,
        wsCode,
        wsRequest: {...body},
      };


      const res = await api.post(url, json, {
        timeout: TIME_OUT_API,
      });

      const {data} = res;
      if (data.errorCode === ERROR_CODES.SUCCESS) {
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        
        return false
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(
          "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
        );
      } else {
        console.log("Lỗi API: " + error.message);
        showNetworkError();
      }
    }
  },
  async post(wsCode, body, url) {
    let json;

    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";
      let valueAsync;

      const rememberMe = await localStorage.getItem(
        LOCAL_STORAGE.REMEMBER_ME
      );

      if (rememberMe === "false") {
        valueAsync = await sessionStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      } else {
        valueAsync = await localStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      }

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      json = {
        sessionId,
        token,
        wsCode,
        wsRequest: {...body},
      };


      const res = await api.post(url, json, {
        timeout: TIME_OUT_API,
      });

      const {data} = res;
      if (data.errorCode === ERROR_CODES.SUCCESS) {
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        
        showErrorAlert(res.data.message);
        return false
      } else if (res.data.errorCode === ERROR_CODES.LOCKUSER) {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(
          "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
        );
      } else {
        console.log("Lỗi API: " + error.message);
        showNetworkError();
      }
    }
  },
  async uploadFileNotification(file, url, typeDoc) {
    let formData = new FormData();

    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";
      let valueAsync;

      const rememberMe = await localStorage.getItem(
        LOCAL_STORAGE.REMEMBER_ME
      );

      if (rememberMe === "false") {
        valueAsync = await sessionStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      } else {
        valueAsync = await localStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      }

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      formData.append('sessionId', sessionId);
      formData.append('token', token);
      formData.append('typeDoc', typeDoc);
      formData.append('file', file);

      const res = await api.post(url, formData, {
        timeout: TIME_OUT_API,
        headers: {"Content-Type": "multipart/form-data"},
      });

      const {data} = res;
      if (data.errorCode === ERROR_CODES.SUCCESS) {
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        
        showErrorAlert(res.data.message);
        return false
      } else if (res.data.errorCode === ERROR_CODES.LOCKUSER) {
        showErrorAlert(res.data.message);
        return false
      } else {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(
          "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
        );
      } else {
        console.log("Lỗi API: " + error.message);
        showNetworkError();
      }
    }
  },
  async importExcel(wsCode, file, url, ...params) {
    let formData = new FormData();

    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";
      let valueAsync;

      const rememberMe = await localStorage.getItem(
        LOCAL_STORAGE.REMEMBER_ME
      );

      if (rememberMe === "false") {
        valueAsync = await sessionStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      } else {
        valueAsync = await localStorage.getItem(
          LOCAL_STORAGE.DATA_AUTH
        );
      }

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      formData.append('sessionId', sessionId);
      formData.append('token', token);
      params.forEach(param => formData.append(param.name, param.value));
      params.forEach(param => formData.append(param.name2, param.value2));
      formData.append('file', file);

      const res = await api.post(url, formData, {
        timeout: TIME_OUT_API,
        headers: {"Content-Type": "multipart/form-data"},
      });

      const {data} = res;
      if (data.errorCode === ERROR_CODES.SUCCESS) {
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        
        showErrorAlert(res.data.message);
        return false
      } else if (res.data.errorCode === ERROR_CODES.LOCKUSER) {
        showErrorAlert(res.data.message);
        return false
      } else {
        showErrorAlert(res.data.message);
        const {wsResponse} = data;
        return {
          code: data.errorCode,
          data: wsResponse,
          msg: data.message
        };
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        showErrorAlert(
          "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
        );
      } else {
        console.log("Lỗi API: " + error.message);
        showNetworkError();
      }
    }
  },

  async uploadFile(body, url) {
    try {
      let api = await this.header();
      let sessionId = "";
      let token = "";

      let valueAsync = await localStorage.getItem(
        LOCAL_STORAGE.DATA_AUTH
      );

      if (valueAsync) {
        sessionId = JSON.parse(valueAsync).sessionId;
        token = JSON.parse(valueAsync).token;
      }

      const res = await api.post(url, body, {
        timeout: TIME_OUT_API,
      });

      if (res.data.errorCode === ERROR_CODES.SUCCESS) {
        return res.data.wsResponse;
      } else {
        showErrorAlert(res.data.message);
      }
    } catch (error) {
      if (error.message === "Network Error") {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else if (error.message.indexOf("timeout of") !== -1) {
        showErrorAlert("Không có kết nối. Vui lòng thử lại");
      } else {
        showErrorAlert(error.message);
      }
    }
  },
};

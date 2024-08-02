import axios, { AxiosResponse } from "axios";

const baseUrl = process.env.REACT_APP_API_URL;
let token = localStorage.getItem("accessToken");

export let config = {
  headers: {
    // Authorization: `Bearer ${token}`,
    'Access-Control-Allow-Origin': '*',
  },
};

export const axiosPost = (reqUrl: string, reqBody: any) => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + reqUrl, reqBody, config)
      .then(function (response: any) {
        if (response.status === 200 || 202) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem("accessToken");
            // window.location.href = baseUrl;
          }
          console.log("err", error.response);
          if (error.response.status === 409) {
            resolve(error.response);
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

export const axiosPatch = (reqUrl: string, reqBody: any = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(baseUrl + reqUrl, reqBody, config)
      .then(function (response: any) {
        if (response.status === 200 || 202) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem("accessToken");
          }
          if (error.response.status === 409) {
            resolve(error);
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

export const axiosGet = (reqUrl: string, reqParams: any = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(baseUrl + reqUrl, { params: reqParams, ...config })
      .then(function (response: any) {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem("accessToken");
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};

export const axiosDelete = (reqUrl: string) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(baseUrl + reqUrl, {}, config)
      .then(function (response: any) {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(function (error: any) {
        if (error.response) {
          if (error.response.status === 401) {
            localStorage.removeItem("accessToken");
            window.location.href = "http://localhost:3000/";
          } else {
            console.log("error", error.response.data.error);
          }
        } else if (error.request) {
          console.log(
            "error on the server and the request could not be completed.",
            error.request
          );
        }
        reject(error);
      });
  });
};


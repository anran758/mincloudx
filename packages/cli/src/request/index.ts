import axios from 'axios';

import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

import { transformErrorMessage } from './utils';

import config from '../config';

const jar = new CookieJar();

const instance = wrapper(
  axios.create({
    baseURL: config.base_url,
    jar,
  })
);

instance.interceptors.response.use(
  function (response) {
    // console.log('axios.interceptors.response --> ', response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // transform response status to error message
    transformErrorMessage(error);

    return Promise.reject(error);
  }
);

export function registerMinCloudHeaders({ token, envId }: { token: string; envId: string }) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  if (envId) {
    instance.defaults.headers.common['X-Hydrogen-Env-ID'] = envId;
  }
}

export default instance;

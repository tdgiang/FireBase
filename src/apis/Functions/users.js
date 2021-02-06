import {PostLogin,PostData} from '../helpers';

import url from '../url';

export const loginApi = async (body) =>
  PostLogin('http://api.dcvinvest.com/api/auth/login', body)
    .then((res) => res)
    .catch((err) => err);

export const logoutApi = async (body) =>
  PostData('http://api.dcvinvest.com/api/auth/logout', body)
    .then((res) => res)
    .catch((err) => err);

import FormData from 'form-data';
import {TLogin, TRegister} from '~/types';
import BaseAPI from '../methods';

const {put, get, post} = new BaseAPI('authenticate');

export const authenticate = {
  login: (params: TLogin) => {
    let frmData = new FormData();
    frmData.append('UserName', params.UserName);
    frmData.append('Password', params.Password);
    return post<{token: string}>('/login-app', frmData);
  },

  register: (data: TRegister) => post('/register-app', data),

  logout: () => post('/logout'),

  forgotPassword: async (params: {userName: string}) =>
    await put(`/forgot-password/${params.userName}`, undefined, {params}),

  checkCanUseThisName: async (params: {name: string; type: 1 | 2 | 3}) =>
    await get<boolean>('/check-validate', {params}),
};

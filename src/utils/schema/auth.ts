import * as yup from 'yup';
import {authenticate} from '~/api';

const REGEX = {
  space: {
    regex: /^(\S+$)/g,
    msg: 'Không chứ khoảng trắng giữa 2 ký tự!',
  },
  vietnamese: {
    regex: /^[^\u00C0-\u1EF9]+$/i,
    msg: 'Username không để tiếng Việt!',
  },
  specialChar: {
    regex: /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
    msg: 'Không chứa ký tự đặc biệt!',
  },
  phone: {
    regex:
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    msg: 'Không đúng định dạng số điện thoại!',
  },
};

const testCheckAvaiable = async (value: string, type: 1 | 2 | 3) => {
  let rs = false;

  if (value) {
    rs = await authenticate
      .checkCanUseThisName({name: value, type: type})
      .then(res => res?.Data);
  }

  return rs;
};

export const SchemaLogin = yup
  .object({
    UserName: yup.string().trim().required('Vui lòng nhập Username!'),
    Password: yup.string().trim().required('Vui lòng nhập mật khẩu!'),
  })
  .required();

export const SchemaResgiter = yup
  .object({
    UserName: yup
      .string()
      .trim()
      .required('Vui lòng nhập Username!')
      .min(6, 'Username tối thiểu 6 ký tự!')
      .matches(REGEX.space.regex, REGEX.space.msg)
      .matches(REGEX.vietnamese.regex, REGEX.vietnamese.msg)
      .test(
        'Username',
        REGEX.specialChar.msg,
        value => !value.match(REGEX.specialChar.regex),
      )
      .test('Username', 'Username đã tồn tại', value =>
        testCheckAvaiable(value, 1),
      ),
    FullName: yup.string().trim().required('Vui lòng nhập tên bạn!'),
    Email: yup
      .string()
      .trim()
      .email('Email không đúng định dạng!')
      .required('Vui lòng nhập email!')
      .test('Email', 'Email đã tồn tại', value => testCheckAvaiable(value, 2)),
    Phone: yup
      .string()
      .required('Vui lòng nhập số điện thoại!')
      .matches(REGEX.phone.regex, REGEX.phone.msg)
      .test('Số điện thoại', 'Số điện thoại đã tồn tại', value =>
        testCheckAvaiable(value.toString(), 3),
      ),
    Password: yup
      .string()
      .trim()
      .required('Vui lòng nhập mật khẩu / không chứa dấu cách!')
      .matches(REGEX.space.regex, REGEX.space.msg)
      .min(6, 'Mật khẩu tối thiểu 6 ký tự!')
      .max(10, 'Mật khẩu tối đa 10 ký tự!'),
    ConfirmPassword: yup
      .string()
      .trim()
      .required('Vui lòng nhập mật khẩu')
      .oneOf([yup.ref('Password')], 'Mật khẩu không trùng!'),
  })
  .required();

export const SchemaForgetPass = yup.object({
  UserName: yup
    .string()
    .trim()
    .email('Email không đúng định dạng!')
    .required('Vui lòng nhập email!'),
});

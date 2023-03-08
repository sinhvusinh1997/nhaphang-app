import * as yup from 'yup';

const REGEX = {
  space: {
    regex: /^(\S+$)/g,
    msg: 'Không chứ khoảng trắng giữa 2 ký tự!',
  },
  vietnamese: {
    regex: /^[^\u00C0-\u1EF9]+$/i,
    msg: 'Username không để tiếng Việt!',
  },
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
      .matches(REGEX.space.regex, REGEX.space.msg)
      .matches(REGEX.vietnamese.regex, REGEX.vietnamese.msg),
    FullName: yup.string().trim().required('Vui lòng nhập tên bạn!'),
    Email: yup
      .string()
      .trim()
      .email('Email không đúng định dạng!')
      .required('Vui lòng nhập email!'),
    Phone: yup.string().trim().required('Vui lòng nhập sđt!'),
    Password: yup
      .string()
      .trim()
      .required('Vui lòng nhập mật khẩu')
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
  Email: yup
    .string()
    .trim()
    .email('Email không đúng định dạng!')
    .required('Vui lòng nhập email!'),
});

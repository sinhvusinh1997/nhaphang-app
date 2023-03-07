import * as yup from 'yup';

export const SchemaLogin = yup
  .object({
    UserName: yup.string().required('Vui lòng nhập Username!'),
    Password: yup.string().required('Vui lòng nhập mật khẩu!'),
  })
  .required();

export const SchemaResgiter = yup
  .object({
    UserName: yup.string().required('Vui lòng nhập Username!'),
    FullName: yup.string().required('Vui lòng nhập tên bạn!'),
    Email: yup
      .string()
      .email('Email không đúng định dạng!')
      .required('Vui lòng nhập email!'),
    Phone: yup.string().required('Vui lòng nhập sđt!'),
    Password: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .min(6, 'Mật khẩu tối thiểu 6 ký tự!')
      .max(10, 'Mật khẩu tối đa 10 ký tự!'),
    ConfirmPassword: yup
      .string()
      .required('Vui lòng nhập mật khẩu')
      .oneOf([yup.ref('Password')], 'Mật khẩu không trùng!'),
  })
  .required();

export const SchemaForgetPass = yup.object({
  Email: yup
    .string()
    .email('Email không đúng định dạng!')
    .required('Vui lòng nhập email!'),
});

import * as Yup from 'yup';

const login = Yup.object().shape({
  username: Yup.string().required('Không để trống!'),
  // .matches(/^[a-zA-Z0-9_ ]*$/)
  // .required('username không chứa khoảng trắng'),
  password: Yup.string().required('Không để trống!'),
});

const register = Yup.object().shape({});

const forgetPass = Yup.object().shape({});

export const Validation = {
  login,
  register,
  forgetPass,
};

import * as Yup from 'yup';

const regx = {
  name: /^[a-zA-Z]{2,20}$/,
  email: /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/,
  password: /^[a-zA-Z0-9_-]{6,18}$/,
};

const name = Yup.string()
  .required('Enter a name')
  .matches(
    regx.name,
    'The name must be between 2 and 20 characters in English!'
  );

const email = Yup.string()
  .required('Enter a email')
  .matches(regx.email, 'Format example@gmail.com');

const password = Yup.string()
  .required('Enter a password')
  .matches(regx.password, 'From 6 to 18 characters in English');

export const schemas = {
  customRegistration: Yup.object().shape({
    name,
    email,
    password,
  }),
  customLogin: Yup.object().shape({
    email,
    password,
  }),
};

export const initialValuesRegistration = { name: '', email: '', password: '' };
export const initialValuesLogIn = { email: '', password: '' };

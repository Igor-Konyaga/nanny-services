import { Formik, Form } from 'formik';
import { Input } from './Input/Input';
import { CustomButton } from './CustomButton/CustomButton';
import {
  initialValuesLogIn,
  initialValuesRegistration,
  schemas,
} from './helper';

export const CustomForm = ({ registration, handleSubmit }) => {
  return (
    <Formik
      initialValues={
        registration ? initialValuesRegistration : initialValuesLogIn
      }
      validationSchema={
        registration ? schemas.customRegistration : schemas.customLogin
      }
      onSubmit={handleSubmit}
    >
      <Form className="form">
        {registration ? (
          <Input name="name" placeholder="Name" id="Name" $mgBt="18px" />
        ) : (
          ''
        )}
        <Input name="email" placeholder="Email" id="Email" $mgBt="18px" />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          id="Password"
          $mgBt="40px"
        />
        <CustomButton  typeBtn="submit">
          {registration ? 'Sign Up' : 'Log In'}
        </CustomButton>
      </Form>
    </Formik>
  );
};

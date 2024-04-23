import { Formik, Form } from 'formik';
import { Input } from './Input/Input';
import { CustomButton } from './CustomButton/CustomButton';
import {
  initialValuesLogIn,
  initialValuesRegistration,
  schemas,
} from './helper';
import { useState } from 'react';

export const CustomForm = ({ registration }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmitForm = async (body, { resetForm }) => {
    try {
      setIsLoading(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);

      resetForm();
    }
  };
  return (
    <Formik
      initialValues={
        registration ? initialValuesRegistration : initialValuesLogIn
      }
      validationSchema={
        registration ? schemas.customRegistration : schemas.customLogin
      }
      onSubmit={handleSubmitForm}
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
        <CustomButton typeBtn="submit">
          {registration ? 'Sign Up' : 'Log In'}
        </CustomButton>
        {isLoading ? <p>Loading...</p> : ''}
        {error ? <p>{error.message}</p> : ''}
      </Form>
    </Formik>
  );
};

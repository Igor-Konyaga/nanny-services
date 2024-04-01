import { Formik, Form } from 'formik';
import { Input } from './Input/Input';
import { CustomButton } from './CustomButton/CustomButton';

export const CustomForm = ({ registration }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => console.log('success')}
    >
      <Form className="form">
        {registration && (
          <Input name="Name" placeholder="Name" id="Name" $mgBt="18px" />
        )}
        <Input name="Email" placeholder="Email" id="Email" $mgBt="18px" />
        <Input
          name="Password"
          placeholder="Password"
          id="Password"
          $mgBt="40px"
        />
        <CustomButton typeBtn="submit">
          {registration ? 'Sign Up' : 'Log In'}
        </CustomButton>
      </Form>
    </Formik>
  );
};

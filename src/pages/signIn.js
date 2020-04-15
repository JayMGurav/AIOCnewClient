import React from 'react';
import { useMutation } from '@apollo/client';
// import { useFormik } from '';

import UserForm from '../components/UserForm.js';
import Loading from '../components/Loading.js';
import { SIGN_IN } from '../gql/mutation.js';

const SignInPage = (props) => {
  const [signin, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return (
    <React.Fragment>
      <UserForm formType={{ email: true, password: true }} action={signin} />
      {loading && <Loading />}
      {error && <p>Error!! Try again</p>}
      <h1>SignIn</h1>
    </React.Fragment>
  );
};

export default SignInPage;
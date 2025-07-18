import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { TextField } from 'formik-mui';

export const Home = () => {
  return (
    <Card>
      <CardContent>
        {/*<Typography variant='h1'>Hello Youtube!!!</Typography>*/}
        <Formik
          initialValues={{}}
          onSubmit={function (
            values: FormikValues,
            formikHelpers: FormikHelpers<FormikValues>,
          ): void | Promise<any> {
            throw new Error('Function not implemented.');
          }}
        >
          <Form>
            <Field name='firstName' component={TextField} label='First Name' />
          </Form>
        </Formik>
      </CardContent>
    </Card>
  );
};

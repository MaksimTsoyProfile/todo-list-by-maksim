import React from 'react';
import { useDispatch } from 'react-redux';
import { Form as RFForm, Field } from 'react-final-form';
import { Form, Button } from 'react-bootstrap';
import { addTask } from './actions';

const FormApp = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, form) => {
    dispatch(addTask({ name: values.username, description: values.description }));
    setTimeout(form.restart);
  };

  const validate = (values) => {
    if (!values.description && !values.username) {
      return {
        description: 'Required',
        username: 'Required',
      };
    }
    if (!values.username) {
      console.log(values);
      return {
        username: 'Required',
      };
    }
    if (!values.description) {
      return {
        description: 'Required',
      };
    }
    return {};
  };

  return (
    <RFForm
    onSubmit={onSubmit}
    validate={validate}
    >
      {({ handleSubmit }) => (
        <>
          <Form onSubmit={handleSubmit}
          className="text-center">
            <Form.Group controlId="formGroupText1">
              <Form.Label>Enter name</Form.Label>
              <Field name="username">
              {(props) => (
                <div>
                  <Form.Control
                  type="text"
                  placeholder="Do your first step"
                  name={props.input.name}
                  onChange={props.input.onChange}
                  value={props.input.value}
                  />
                  {props.meta.error && props.meta.touched && <span style={{ color: 'red' }}>{props.meta.error}</span>}
                </div>
              )}
              </Field>
            </Form.Group>
            <Form.Group controlId="formGroupText2">
              <Form.Label>Enter a description</Form.Label>
              <Field name="description">
              {(props) => (
                <div>
                  <Form.Control type="text" placeholder="Deadline 6 days" name={props.input.name} onChange={props.input.onChange} value={props.input.value}/>
                  {props.meta.error && props.meta.touched && <span style={{ color: 'red' }}>{props.meta.error}</span>}
                </div>
              )}
              </Field>
            </Form.Group>
            <Button variant="outline-dark" type="submit">Add your task +</Button>
          </Form>
        </>
      )}
    </RFForm>
  );
};

export default FormApp;

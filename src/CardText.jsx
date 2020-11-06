import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import { Form as RFForm, Field } from 'react-final-form';
import { changeTask } from './actions';

const CardText = ({
  name, description, isRename, id,
}) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(changeTask({ name: values.username, description: values.description, id }));
  };

  if (isRename) {
    return (
      <RFForm onSubmit={onSubmit} >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="text-center" style={{ margin: '15px' }}>
          <Form.Group controlId="formGroupText1">
            <Form.Label>Enter name</Form.Label>
            <Field name="username">
            {(props) => (
              <div>
                <Form.Control type="text" placeholder="Do your first step" name={props.input.name} onChange={props.input.onChange} value={props.input.value}/>
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
              </div>
            )}
            </Field>
          </Form.Group>
          <Button variant="warning" type="submit">Rename your TASK</Button>
        </Form>
      )}
    </RFForm>
    );
  }
  return (
    <>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </>
  );
};

export default CardText;

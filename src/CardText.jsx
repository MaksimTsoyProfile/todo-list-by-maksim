import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, Button, Form } from 'react-bootstrap';
import { Form as RFForm, Field } from 'react-final-form';
import { changeTask, cancelRename } from './actions';

const CardText = ({
  name, description, isRename, id,
}) => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(changeTask({ name: values.username, description: values.description, id }));
  };

  const cancel = () => {
    dispatch(cancelRename(id));
  };

  if (isRename) {
    return (
      <RFForm onSubmit={onSubmit} >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="text-center" style={{ margin: '15px' }}>
          <Form.Group controlId="formGroupText1">
            <Form.Label>Enter name</Form.Label>
            <Field name="username" initialValue={name}>
            {(props) => (
              <div>
                <Form.Control type="text" placeholder="Do your first step" name={props.input.name} onChange={props.input.onChange} value={props.input.value} />
              </div>
            )}
            </Field>
          </Form.Group>
          <Form.Group controlId="formGroupText2">
            <Form.Label>Enter a description</Form.Label>
            <Field name="description" initialValue={description}>
            {(props) => (
              <div>
                <Form.Control type="text" placeholder="Deadline 6 days" name={props.input.name} onChange={props.input.onChange} value={props.input.value}/>
              </div>
            )}
            </Field>
          </Form.Group>
          <Button variant="warning" type="submit">Rename your TASK</Button>
          <Button variant="info" type="button" onClick={cancel}>Cancel</Button>
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

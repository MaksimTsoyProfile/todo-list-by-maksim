import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import {
  removeTask, completeTask, renameTask, activeTask,
} from './actions';
import CardText from './CardText';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleRemoveTask = (id) => (e) => {
    e.preventDefault();
    dispatch(removeTask(id));
  };
  const handleCompleteTask = (id) => (e) => {
    e.preventDefault();
    dispatch(completeTask(id));
  };
  const handleRenameTask = (id) => (e) => {
    e.preventDefault();
    dispatch(renameTask(id));
  };
  const handleActiveTask = (id) => (e) => {
    e.preventDefault();
    dispatch(activeTask(id));
  };

  return (
      <div>
        {Object.values(tasks).map((task) => {
          if ((filter === 'all' || filter === 'active') && task.stateTask === 'progress') {
            return (<Card className="text-center mt-5" key={task.id} >
            <Card.Header>TASK</Card.Header>
            <Card.Body>
              <CardText
              name={task.name}
              description={task.description}
              isRename={task.rename}
              id={task.id}/>
              <Button variant="success" onClick={handleCompleteTask(task.id)}>Complete Task</Button>
              <Button variant="danger" onClick={handleRemoveTask(task.id)}>Delete Task</Button>
              <Button type="button" variant="primary" onClick={handleRenameTask(task.id)}>Rename Task</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{task.id}</Card.Footer>
          </Card>);
          }
          if ((filter === 'all' || filter === 'completed') && task.stateTask === 'done') {
            return (<Card className="text-center mt-5" key={task.id}>
            <Card.Header>TASK</Card.Header>
            <Card.Body style={{ backgroundColor: 'green' }}>
            <CardText
              name={task.name}
              description={task.description}
              isRename={task.rename}
              id={task.id}/>
              <Button variant="success" onClick={handleActiveTask(task.id)}>Active Task</Button>
              <Button variant="danger" onClick={handleRemoveTask(task.id)}>Delete Task</Button>
              <Button type="button" variant="primary" onClick={handleRenameTask(task.id)}>Rename Task</Button>
            </Card.Body>
          <Card.Footer className="text-muted">{task.id}</Card.Footer>
          </Card>);
          }
          return null;
        })}
    </div>
  );
};

export default TaskList;

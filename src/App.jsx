import React from 'react';
import Form from './Form';
import ToggleButtonGroupControlled from './ToggleButtonGroupControlled';
import TaskList from './TaskList';

const App = () => (
    <div className="container">
      <h2 className="text-center">Task manager by Maks</h2>
      <div className="row">
        <div className="col-12">
          <Form />
        </div>
        <div className="col-12">
          <h3>Filter:</h3>
          <ToggleButtonGroupControlled />
        </div>
        <div className="col-12">
          <TaskList />
        </div>
      </div>
    </div>
);

export default App;

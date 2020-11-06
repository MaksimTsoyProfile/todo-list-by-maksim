import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { filterAll, filterActive, filterCompleted } from './actions';

const ToggleButtonGroupControlled = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const handleChange = (val) => setValue(val);
  const onClickAll = () => {
    dispatch(filterAll());
  };
  const onClickActive = () => {
    dispatch(filterActive());
  };
  const onClickCompleted = () => {
    dispatch(filterCompleted());
  };
  return (
    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton value={1} onClick={onClickAll} >All</ToggleButton>
      <ToggleButton value={2} onClick={onClickActive}>Active</ToggleButton>
      <ToggleButton value={3} onClick={onClickCompleted}>Completed</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ToggleButtonGroupControlled;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleButton, ButtonGroup } from 'react-bootstrap';
import { filterAll, filterActive, filterCompleted } from './actions';

const ToggleButtonGroupControlled = () => {
  const dispatch = useDispatch();
  const onClickAll = () => {
    dispatch(filterAll());
  };
  const onClickActive = () => {
    dispatch(filterActive());
  };
  const onClickCompleted = () => {
    dispatch(filterCompleted());
  };
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'All', value: '1', clickButton: onClickAll },
    { name: 'Active', value: '2', clickButton: onClickActive },
    { name: 'Completed', value: '3', clickButton: onClickCompleted },
  ];

  return (
    <>
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
            onClick={radio.clickButton}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
};

export default ToggleButtonGroupControlled;

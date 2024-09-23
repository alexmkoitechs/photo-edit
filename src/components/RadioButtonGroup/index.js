import React, { useState } from 'react';

import styles from "./styles.module.scss";

const RadioButtonGroup = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div>
      <span>Select an option:</span>
      <div className={styles.list}>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              value={option.value}
              className={styles.option}
              checked={selectedOption === option.value}
              onChange={(e) => setSelectedOption(event.target.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
      
      <div className={styles.selected}>
        <span>Selected Option:</span> {selectedOption}
      </div>
    </div>
  );
};

export default RadioButtonGroup;

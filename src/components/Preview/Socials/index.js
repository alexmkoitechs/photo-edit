import RadioButtonGroup from '../../../components/RadioButtonGroup';

import styles from "./styles.module.scss";

const Socials = () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <div className={styles.socials}>
      <RadioButtonGroup options={options} />
    </div>
    );
};

export default Socials;

import styles from './FoodInput.module.css';
const FoodInput = ({ handleKeyDown }) => {
  return (
    // using eventy or onChange WITH APP.JSX MEANS PARENTS
    <input
      type="text"
      placeholder="Enter your Food "
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    ></input>
  );
};
export default FoodInput;

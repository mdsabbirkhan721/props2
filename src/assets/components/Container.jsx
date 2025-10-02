import styles from './Container.module.css';
// using childre properties
const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
export default Container;

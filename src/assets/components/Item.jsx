import css from './Item.module.css';

const Item = ({ foodItems, bought, handlebyButton }) => {
  return (
    <li className={`list-group-item ${bought && 'active'}`}>
      {/* css-module=thats give your local css name to a unique name */}
      <span className={`${css['kg-span']}`}>{foodItems}</span>
      <button
        type="button"
        className={`${css.button} btn btn-info`}
        // this onClick parent is=FooodItems.jsx
        onClick={handlebyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;

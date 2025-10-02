// learning use state or managing state
import { useState } from 'react';
import Item from './Item';

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handlebyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;

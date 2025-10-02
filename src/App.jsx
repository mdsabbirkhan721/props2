import ErrorMsg from './assets/components/ErrorMsg';
import FoodItems from './assets/components/FoodItems';
import './App.css';
import Container from './assets/components/Container';
import FoodInput from './assets/components/FoodInput';
import { useState } from 'react';

function App() {
  // let foodItems=[];

  //another way use state:
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value;

      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      {/* using childern to pass the whole Container */}
      <Container>
        <h1 className="foodheading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* using props to pass parent items to child */}
        <ErrorMsg items={foodItems}></ErrorMsg>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos
          quaerat laborum quas consequuntur odit reiciendis perspiciatis
          aspernatur iure ea quidem accusamus veniam dicta voluptates sequi
          omnis, totam exercitationem natus!
        </p>
      </Container>
    </>
  );
}

export default App;

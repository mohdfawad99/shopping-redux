import React from 'react';
import { useSelector } from 'react-redux';

import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

const App = () => {
  // HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
  const items = useSelector(state => state.items)

  const totalItemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className='app-background'>
      <div className='main-container'>
        <AddItem />
        <ItemList items={items} />
        <div className='total'>Total: {totalItemCount}</div>
      </div>
    </div>
  );
};

export default App;
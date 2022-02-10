import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/actions';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const dispatch = useDispatch();

  const addItemButtonHandler = () => {
    if(itemName !== ""){
      dispatch(addItem(itemName))
      setItemName('')
    }
  }

  return (
    <div className='add-item-box'>
          <input className='add-item-input' placeholder='Add an item...' value={itemName} onChange={e => setItemName(e.target.value)} />
          <FontAwesomeIcon icon={faPlus} onClick={addItemButtonHandler} />
        </div>
  );
};

export default AddItem;

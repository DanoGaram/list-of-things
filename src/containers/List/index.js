import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './List.css';
import Button from '../../components/Button';
import { getUniqueId } from '../../libs/utils';

function List(props) {
  const [list, setList] = useState(props.list);
  const onClickAdd = () => {
    const id = getUniqueId();
    setList((prev) => ([{text: '', id}, ...prev]));
  };
  const handleDeleteItem = (id) => {
    const newList = list.filter(x => x.id !== id);
    setList(newList);
  };
  return (
    <>
      <Button onClick={onClickAdd} color="primary">Add</Button>
      {list.map(x => (
        <Item key={x.id} id={x.id} text={x.text} handleDelete={handleDeleteItem}/>
      ))}
    </>
  );
}

List.defaultProps = {
  list: []
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number.isRequired
  }))
};

export default List;

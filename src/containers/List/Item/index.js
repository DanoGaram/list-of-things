import React, { useState } from 'react';
import PropTypes from 'prop-types';
import List from '../../List';
import './Item.css';
import Button from '../../../components/Button';

function Item(props) {
  const [showSubList, setShowSubList] = useState(false);
  const onClickDelete = () => {
    props.handleDelete(props.id);
  }
  const onClickOpen = () => {
    setShowSubList((prev) => !prev);
  }
  return (
    <div className="item-container">
      <div className="item-row">
        <input type="text" className="pretty-input" />
        <Button onClick={onClickDelete} color="secondary">Delete</Button>
        <Button onClick={onClickOpen} color="default">{showSubList ? 'Hide' : 'Open'}</Button>
      </div>
      <div className={`sub-list ${!showSubList ? 'hidden': ''}`} >
        <List list={props.subList} />
      </div>
    </div>
  );
}

Item.defaultProps = {
  text: '',
  subList: []
};

Item.propTypes = {
  text: PropTypes.string,
  subList: PropTypes.array,
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default Item;

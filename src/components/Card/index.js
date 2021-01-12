import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
  return (
    <div className="card-container">
      {props.children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node
};

export default Card;

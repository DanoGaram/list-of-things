import React from 'react';
import './ListOfThings.css';
import Card from '../../components/Card';
import List from '../List';

function ListOfThings() {
  
  return (
    <div className="things-list-container">
      <div className="list">
        <Card>
          <p className="title">List Of Things</p>
          <List/>
        </Card>
      </div>
    </div>
  );
}

export default ListOfThings;

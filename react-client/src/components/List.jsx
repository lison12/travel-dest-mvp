import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className='main-list'>
    <h4> Top Attractions </h4>
    There are { props.items.length } items.
    { props.items.map((item, i) => <ListItem item={item} key={i} />)}
  </div>
)

export default List;
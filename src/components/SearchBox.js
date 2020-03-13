import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange}) => {
  return (
    <div className='pa2'>
    <input
    className='pa3 ba b--black bg-lightest-blue br-pill outline-0'
      type='search'
      placeholder='search kitty'
      onChange={searchChange}
    />
    </div>
  );
}

export default SearchBox;

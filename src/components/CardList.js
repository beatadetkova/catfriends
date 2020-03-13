import React from 'react';
import Card from './Card'

const CardList = ({ kittens }) => {
  return (
    <div className="flex flex-wrap items-center justify-center">
    {
      kittens.map((user, i )=> {
        return (
          <Card
            key ={i}
            id={kittens[i].id}
            name={kittens[i].name}
            email={kittens[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;

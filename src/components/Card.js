import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className ='tc bg-light-yellow dib br3 pa3 ma2 grow ba bw2 b--black shadow-5'>
      <img alt='picture' src={`https://robohash.org/${id}?set=set4&size=200x200`} />
      <div className="flex flex-column items-center justify-around" style={{height: '130px', width: '200px'}}>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

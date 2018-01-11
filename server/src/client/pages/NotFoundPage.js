import React from 'react';

const NotFundPage = ({staticContext}) =>{
  staticContext.notFound = true;

  return (
    <h3>Oooops! 404 Not Found!!</h3>
  );
}

export default{
  component: NotFundPage
}

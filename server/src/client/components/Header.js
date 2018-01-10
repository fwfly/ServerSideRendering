import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({auth}) => {
  console.log("My status is ", auth);

  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  );
};


function mapStatsToProps({auth}){
    return {auth}
}

export default connect(mapStatsToProps)(Header);

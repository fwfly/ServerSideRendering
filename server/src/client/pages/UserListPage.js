import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import { Helmet } from 'react-helmet';

class UserList extends Component{
  componentDidMount(){
    this.props.fetchUsers();
  }

  renderUser(){
    return this.props.users.map( user =>{
      return(
        <li key={user.id}>
          {user.name}
        </li>
      );
    })
  }

  header(){
    return(
      <Helmet>
        <title>
          {`${this.props.users.length}`} Users Loaded
        </title>
        <meta property="og:title" component="User App" />
      </Helmet>
    );
  }

  render(){
    return(
      <div>
        {this.header()}
        Here's big list of users:
        <ul>
          {this.renderUser()}
        </ul>
      </div>
    );
  }
}

function mapStateToPorps(state){
 return {users : state.users};
}

function loadData(store){
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component:connect(mapStateToPorps, {fetchUsers})(UserList)
}

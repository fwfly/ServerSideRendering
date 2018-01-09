import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';


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

  render(){
    return(
      <div>
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
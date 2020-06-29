import React from 'react';
import './App.css';


class App extends React.Component {

      state = {
          users: []
      }

      async componentDidMount(){
        const response = await fetch('http://localhost:4000/allUsers')
        const json = await response.json()
        console.log(json)
        this.setState({users: json})
      }
      
      // apiCall(url){
      //   const response = await fetch(`http://localhost:4000/${url}`)
      // }

  render(){
    if (!this.state.users){
      return null
    }
    let allUsers = []
    allUsers = this.state.users.map(user => <div>{user.firstName}{user.userId}<button onlick="editUserDetails">Edit User</button><a href={`http://localhost:4000/userDelete/${user.userId}`}>Delete User</a></div>)
  
    return (
      <div>
        <div class="userPage"></div>
          <div class="allUsers">{allUsers}</div> 
            
            
            <div class="createUser"></div>
            <div class="userDetails"></div>
            <div class="updateUserDetails"></div>
            <div class="deleteUser"></div>
         <div class="customerPage"></div>
          <div class="createOrder"></div>
            <select name="newItems" id="newItems">   
              {/* <option value="item[X]">{item[X]}</option> */}
            </select>
          <div class="repReview"></div>
        <div class="manufacture"></div>
          <div class="fulfillOrder"></div>
      </div>
    )
  }
  
  }

export default App;

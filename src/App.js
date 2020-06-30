import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
  }
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
       handleDelete = (event) => {
        event.preventDefault();
        if(this.state){
        const requestOptions = {
          method: 'DELETE'
        };
      
        
        fetch("http://localhost:4000/userDelete/" + event.target.id, requestOptions)
        this.setState({users: []})
  


    }}
      async componentDidUpdate(prevProps, prevState){
      if (prevState != this.state){
        console.log('change has occured')
        const response = await fetch('http://localhost:4000/allUsers')
        const json = await response.json()
        this.setState({users: json})


//This is reacts own DOCS componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  // if (this.rops.upserID !== prevProps.userID) {
  //   this.fetchData(this.props.userID);
  // }

      }
    }

  render(){
    if (!this.state.users){
      return null
    }
    let allUsers = []
    allUsers = this.state.users.map(user => <div>{user.firstName} {user.userId}<button onClick={this.handleDelete} id={user.userId}>Delete User</button></div>)
  
    return (
      <div>
        <div class="userPage"></div>
          <div class="allUsers">{allUsers}</div> 
          {/* <ViewAll /> */}
            
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

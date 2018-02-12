import React, { Component } from 'react';

import spinner from './components/spinner.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
      isOpen: false,
      loading: true
    }
  }

  // componentWillMount(){
  //   this.getData();
  // }

  componentDidMount(){
    this.getData();
  }

  // connect to server and get data into users: []
  getData = () => {
    fetch('http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        .then((response) => {
          response.json().then((data)=> {
            this.setState({
              users: data,
              search_u: '',
              loading: false
            });
          });
        })
        .catch(error => console.log(error) );

  }

  handleClick = (e) => {
    console.log("q")
    this.setState({
      isOpen: !this.state.isOpen,

    })
  }



  render(){

    const {users} = this.state
    //const body = this.state.isOpen && <section>{users.address}</section>
    // console.log(users);
    const iconHand = {
      cursor: 'pointer'
    }

    if(this.state.loading) {
      return(
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>

      )
    }  else {
      return(
        <div className ="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Id    <i style = {iconHand}
                  onClick = {this.sortHandle}
                  className="fa fa-sort"></i></th>
                <th scope="col">First Name    <i style = {iconHand}
                  onClick = {this.sortHandle}
                  className="fa fa-sort"></i></th>
                <th scope="col">Last Name    <i style = {iconHand}
                  onClick = {this.sortHandle}
                  className="fa fa-sort"></i></th>
                <th scope="col">E-mail    <i style = {iconHand}
                  onClick = {this.sortHandle}
                  className="fa fa-sort"></i></th>
                <th scopr="col">Phone    <i style = {iconHand}
                  onClick = {this.sortHandle}
                  className="fa fa-sort"></i></th>
              </tr>
            </thead>


          {users.map((user, id) =>{
            return(

                <tbody>
                 <tr onClick = {this.handleClick}>
                   <td>{user.id}</td>
                   <td>{user.firstName}</td>
                   <td>{user.lastName}</td>
                   <td>{user.email}</td>
                   <td>{user.phone}</td>
                 </tr>
                 {this.state.isOpen && <tr><td>{user.address.streetAddress}</td></tr>}
                </tbody>


          )
          })}
          </table>
        </div>
      )}
    }
  }



export default App;

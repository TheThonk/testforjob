import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [],
    }
  }

  componentWillMount(){
    this.getData();

  }

  getData = () => {
    fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
        .then((response) => {
          response.json().then((data)=> {
            this.setState({
              users: data
            });
          });
        })

  }

  render(){

    const {users} = this.state;

      return(
        <div className ="container">
          <table className = "table">
            <thead className = "thead-dark">
              <tr>
                <th scope = "col">Id</th>
                <th scope = "col">FirstName</th>
                <th scope = "col">LastName</th>
                <th scope = "col">E-mail</th>
                <th scope = "col">Phone</th>
              </tr>
            </thead>
          </table>


          {users.map((user, id) =>{
            return(
              <div>
                <table className = "table">
                  <tbody>
                    <tr>
                      <th scope = "row">{user.id}</th>
                      <th scope = "row">{user.firstName}</th>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
          )
          })}
        </div>

      )
    }
  }



export default App;

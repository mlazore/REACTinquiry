import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super()
    this.state = {
      person:{
        name: "Martin A Lazore",
        phone: 555-555-5555,
        Birthdate: 10/29/2000
      },
      people: [
        {
          name: "Mark",
          phone: 555-555-5555,
          Birthdate: 11/29/2000
        },
        {
        name: "Mat",
        phone: 555-555-5555,
        Birthdate: 12/29/2000
    },
    {
        name: "Mike",
        phone: 555-555-5555,
        Birthdate: 01/29/2000
        },
      ]
    };
  }

 
  render(){
  return this.state.people.map(function(person, index) {
    return <Basicinfo key="{index}" person={person} />;
    })
  }
}

export default App;

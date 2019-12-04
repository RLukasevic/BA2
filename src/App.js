import React, { Component } from 'react';

import axios from 'axios';

class App extends Component {
  state = { 
    feedbacks: [],
    form: {
      name: '',
      email: '',
      comment: '',
      data: '',
    },
   }

 

  componentDidMount() {

    axios.get('http://localhost:3212/feedbacks')
  .then(res => {
    console.log(res);
  })
  .catch(e => {
    console.log(e);
  });
 

  }

  // handleSubmit = event => {
  //   event.preventDefault();

  //   const user = {
  //     name: this.state.name
  //   };

  //   axios.post(`http://localhost:3212/feedbacks`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }

  render() { 



    return ( 
      <div>Poggers</div>
     );
  }
}
 
export default App;
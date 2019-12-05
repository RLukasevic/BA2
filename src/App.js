import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';

class App extends Component {
  state = { 
    feedbacks: [],
    form: {
      name: '',
      email: '',
      comment: '',
      },
    } 

  componentDidMount() {
    axios.get('http://localhost:3212/feedbacks')
    .then(res => {
      console.log(res);
      const fbArr = [];
      for (let key in res.data.body) {
        fbArr.push({id:key, name: res.data.body[key].name, email: res.data.body[key].email, comment: res.data.body[key].comment});
    }
    this.setState({ feedbacks: fbArr });
    return true;
    })
    .catch(e => {
      console.log(e);
      return true;
    });
 }

  handleSubmit = () => {
    // event.preventDefault();

    axios.post(`http://localhost:3212/feedbacks`, this.state.form)
      .then(res => {
        this.setState({ form: {name: '',email: '',comment: ''} });
        console.log(res);
        console.log(res.data);
      })
  }

  onChangeHandler = (event,elementId) => {
    const newForm = {...this.state.form};
    newForm[elementId] = event.target.value;
    this.setState({
      ...this.state.feedbacks,
      form: newForm
    });
  }

  render() { 

    const formElementsArray = [];
    for (let key in this.state.form) {
        formElementsArray.push({id:key, value: this.state.form[key]});
    }

    let form = (                
      <form className={styles.Form} onSubmit={this.handleSubmit}>
          {formElementsArray.map(formElement => (
              <input 
              key={formElement.id}
              placeholder={formElement.id}
              value={formElement.value} 
              onChange={(event) => this.onChangeHandler(event,formElement.id)} />
          ))}
          <button className={styles.Button} type="submit">Submit</button>
      </form>
  );

    let feedbacks = (
        <div>
          {this.state.feedbacks.map(el => (
            <div className={styles.Feedback} key={el.id}>
            <p>Name: {el.name}</p>
            <p>Email: {el.email}</p>
            <p>{el.comment}</p>
            </div>
          ))}
        </div>
    );

    return ( 
      <div>
        {form}
        {feedbacks}
      </div>
     );
  }
}
 
export default App;
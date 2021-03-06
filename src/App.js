import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';
import Axios from 'axios';

class App extends React.Component {
  state = {
    todos : []
  };


  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res =>
    this.setState({
      todos: res.data
    }));
  }


  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map( todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        } 
        return todo;
      })
    });
  }



  // Add Todo item
  addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos", {
      title : title,
      completed: false
    }).then(res => this.setState({
      todos : [...this.state.todos, res.data]
    }));



  }

  // Delete Todo item
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => 
    this.setState({
      todos : this.state.todos.filter( todo => {
        if (todo.id !== id) {
          return todo;
        }
        return null;
      })
    }));

    
  }



  render() {
    return (
      <Router>
        <div className="App">
          <div className = 'container'>
            <Header />
            <Route exact path='/To-Do-List-App/' render = {props => (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                <Todos todos = {this.state.todos} markComplete = {this.markComplete} delTodo = {this.delTodo}/>
              </React.Fragment>
            )} />

            <Route path = '/To-Do-List-App/about' component={About} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

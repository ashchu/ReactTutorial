import React from 'react';
import './App.css';
import Todos from './components/Todos'


class App extends React.Component {

state = {
  todos: [{
    id: 1,
    title: 'Take out the trash',
    completed: false
    },
    {
      id:2,
      title: 'Eat dinner',
      complete: false
    },
    {
      id: 3,
      title: 'See friends',
      complete: false
    }
  ]
}

//mark todo
markComplete = (id) => {
  this.setState( {todos: this.state.todos.map(todo => {
    if(todo.id == id) {
      todo.completed = !todo.completed
    }
    return todo;
  })} );
}


  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;

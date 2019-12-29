import React,{Component} from 'react';
import './App.css';
import ListItem from './ListItem';

class App extends Component{
  constructor(){
    super()
    this.state = {
      lists: [
        {
          id: 1,
          listname: 'Testing',
          tasks:[
            {
              id:1,
              tasktitle:"Hello",
              taskdesp:"Hello Descript",
              isCompleted: false,
            },
            {
              id:2,
              tasktitle: "Hello2",
              taskdesp: "Hello Descript2",
              isCompleted: false,
            },
          ]
        },
        {
          id: 2,
          listname: 'New Requirements',
          tasks:[
            {
              id:1,
              tasktitle:"World",
              taskdesp:"World Descript",
              isCompleted: false,
            },
            {
              id:2,
              tasktitle: "World2",
              taskdesp: "World Descript2",
              isCompleted: false,
            },
          ]
        }
      ]
    }

  }

  render(){
    return (
      <div className='board'>
        <ul>
          <li>
            <ListItem listName='List1' />
          </li>
          <li>
            <ListItem listName='List2' />
          </li>
        </ul>
        
        
      </div>
    )
  }
}

export default App;

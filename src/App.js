import React,{Component} from 'react';
import './App.css';
import ListItem from './ListItem';
import ModalTask from './ModalTask';

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
      ],
      newlistname:'',
      tasktitle:'',
      taskdesp:'',
      showmodal: false
    }
    this.addNewList = this.addNewList.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChildChange = this.handleChildChange.bind(this);
    this.showModal = this.showModal.bind(this);
    
  }

  addNewList(){
    var newid = this.state.lists[this.state.lists.length-1].id + 1;
    var newlistobj = {
      id: newid,
      listname: this.state.newlistname,
      tasks:[]
    }
    var curList = this.state.lists;
    curList.push(newlistobj);
    this.setState({
      lists: curList,
      newlistname:''
    })
  }
  
  handleChange(e){
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleChildChange(name,value) {
    // console.log(name, value,'title');

    // console.log(target)
    if(name==='tasktitle'){
      this.setState({
        tasktitle: value
      })
    }
    if(name==='taskdesp'){
      this.setState({
        taskdesp: value
      })
    }
    
  }
  showModal(e,listid){
    e.preventDefault();
    this.listsid = listid;
    console.log(listid);
    this.setState({
      showmodal:true
    })
  }
  addNewTask(event,listid) {
    event.preventDefault();
    console.log('hello \n');
    console.log(listid);
    var taskList= this.state.lists.find(x => x.id === listid).tasks;
    if (taskList[taskList.length]>1){
      var newtaskid = taskList[taskList.length - 1].id + 1;
    } else {
      newtaskid = 1;
    }
    var newtaskobj = {
      id: newtaskid,
      tasktitle: this.state.tasktitle,
      taskdesp: this.state.taskdesp,
      isCompleted: false
    }
    taskList.push(newtaskobj);
    console.log(taskList);
    var curList = this.state.lists;
    curList.map((eachlist)=>{
      if(eachlist.id===listid) {
        eachlist.tasks=taskList;
      } 
      return eachlist
    })
    this.setState({
      lists: curList,
      showmodal:false,
      tasktitle: '',
      taskdesp: ''
    })
  }
  render(){
    var listarray = this.state.lists.map((eachlist)=>{
      return (
        <li key={eachlist.id}>
          <ListItem 
            listName={eachlist.listname} 
            id={eachlist.id} 
            tasks={eachlist.tasks} 
            showModal={this.showModal}
          />
        </li>
      )
    })
    return (
      <div className='board'>
        <ul>
          {listarray}
          <li>
            <input 
            name = 'newlistname'
            placeholder = 'Enter New List Name'
            value = {this.state.newlistname}
            onChange={(e)=>this.handleChange(e)}
            /> <br/ >
            <button onClick={this.addNewList}>Add New List</button>
          </li>
        </ul>
        {this.state.showmodal?
        <ModalTask 
          handleChildChange={this.handleChildChange}
          tasktitle = {this.state.tasktitle}
          taskdesp = {this.state.taskdesp}
          addtask = {this.addNewTask}
          listsid={this.listsid}
        />:''
        }
      </div>
    )
  }
}

export default App;

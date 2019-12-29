import React,{Component} from 'react';
import TaskItem from './TaskItem';

class ListItem extends Component  {
    constructor(props){
        super();
    }
    
    // console.log(props.tasks);
    render(){
        // console.log(this.props.newtask);
        var tasklist = this.props.tasks.map((eachtask)=>{
            return(
                <li key={eachtask.id}>
                    <TaskItem name={eachtask.tasktitle} />
                </li>
            )
        })
        
        return ( 
            <div>
                <div className='lists' id={this.props.id}>
                    <p className='listtitle'>{this.props.listName}</p>
                    <ul>
                        {tasklist}
                        <li>
                            <button onClick={e=>this.props.showModal(e,this.props.id)}>Add New Task</button>
                        </li>
                    </ul>
                    
                    
                </div>
                
            </div>
        )
    }
    

    
}

export default ListItem;
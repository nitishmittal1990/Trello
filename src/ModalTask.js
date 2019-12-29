import React from 'react';

function ModalTask(props) {

    return ( 
        <div className='addTaskModal'>
            <form onSubmit={e=>props.addtask(e,props.listsid)} id={props.listsid}>
                <label>Task Title</label>
                <input 
                    type = 'text'
                    placeholder = 'Add Task Title'
                    name = 'tasktitle'
                    value={props.tasktitle}
                    onChange = {e=>props.handleChildChange('tasktitle',e.target.value)}
                />
                <label>Task Description</label>
                <textarea 
                    name = 'taskdesp'
                    value={props.taskdesp}
                    onChange = {e=>props.handleChildChange('taskdesp',e.target.value)}
                />
                <button type='submit'>Create Task</button>
            </form>
        </div>
    )
}

export default ModalTask;
import React from 'react';
import TaskItem from './TaskItem';

function ListItem(props) {
    
    return ( 
        <div>
            <div className='lists'>
                <p className='listtitle'>{props.listName}</p>
                <TaskItem name='task1' />
                <TaskItem name='task2' />
            </div>
        </div>
    )
}

export default ListItem;
import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import TaskComponent from '../task';
import { LEVELS } from '../../models/levels.enum';

const TaskListComponent = () => {
const defaultTask = new Task("Example", "Default description", false, LEVELS.NORMAL);

const changeState = (id) =>{
    console.log("Todo: Cambiar estado de una tarea")
}

  return (
    <div>
        <div>
            Your Task: 
        </div>
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

TaskListComponent.propTypes = {}

export default TaskListComponent
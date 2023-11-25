import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, updateTask } from '../redux/actions/todoActions';
import style from './ToDoList.module.css'


const mapStateToProps = (state) => ({
    tasks: state,
});

const mapDispatchToProps = (dispatch) => ({
    addTask: (taskName) => dispatch(addTask(taskName)),
    deleteTask: (index) => dispatch(deleteTask(index)),
    updateTask: (index, newTaskName) => dispatch(updateTask(index, newTaskName)),
});

function ToDoList({ tasks, addTask, deleteTask, updateTask }) {
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const handleAddTask = () => {
        if (newTask.length === 0) {
            alert('Kindly Enter Task Name!!!!');
        } else {
            if (editIndex !== null) {
                // If editIndex is not null, update the existing task
                updateTask(editIndex, newTask);
                setEditIndex(null);
            } else {
                // Otherwise, add a new task
                addTask(newTask);
            }
            setNewTask('');
        }
    };

    const handleEditTask = (index, taskName) => {
        setEditIndex(index);
        setNewTask(taskName);
    };
    const handleCompleteTask = (index) => {
        updateTask(index, tasks[index] + '(Completed)');
    };
    return (
        <>
            <div className={style["container"]}>
                <div id={style["newtask"]}>
                    <input
                        type="text"
                        placeholder="Add Tasks"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button id={style["push"]} onClick={handleAddTask}>
                        {editIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>
                <div id={style["tasks"]}>
                {tasks.map((task, index) => (
            <div
              key={index}
              className={`${style["task"]} ${task.includes('(Completed)') ? style["completedTask"] : ''}`}
            >
              <span id={style["taskname"]}>{task}</span>
              <div className={style['task__buttons']}>
              {!task.includes('(Completed)') && (
                  <>
                    <button className={style["edit"]} onClick={() => handleEditTask(index, task)}>
                      Edit
                    </button>
                    <button className={style["delete"]} onClick={() => deleteTask(index)}>
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </>
                )}
                {!task.includes('(Completed)') && (
                  <button className={style['complete']} onClick={() => handleCompleteTask(index)}>
                    <i className="fas fa-check"></i>
                  </button>
                )}
              </div>
            </div>
          ))}
                </div>
            </div>
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
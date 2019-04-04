import React from 'react';
import Task from './Task';

const TaskList = (props) => {
  const active = props.tasks.filter(task => task.active);

  if (active.length >= 2) {
    active.sort((a, b) => {
      if (a.text.toLowerCase() < b.text.toLowerCase())
        return -1;
      if (a.text.toLowerCase() > b.text.toLowerCase())
        return 1;
      return 0;
    })
  }

  const done = props.tasks.filter(task => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate > b.finishDate)
        return -1;
      if (a.finishDate < b.finishDate)
        return 1;
      return 0;
    })
  }

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)


  return (
    <div>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>brak zadań, ale jesteś szczęśliwym człowiekiem!</p>}
      </div>

      <hr />

      <div className="done">
        <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
        {doneTasks.length > 5 && <span style={{ fontSize: 10, color: 'red' }}>Wyświetlonych jest jedynie 5 ostatnich zadań</span>}
        {doneTasks.slice(0, 5)}
      </div>
    </div>
  );
}

export default TaskList;
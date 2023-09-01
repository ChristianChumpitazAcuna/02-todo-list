import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask = '';
  tasks: any[] = [
    {
      title: 'Crear la lista de tareas',
      completed: true
    },

    {
      title: 'Crear la lista de tareas',
      completed: true
    },

    {
      title: 'Desplegar el proyecto en la web',
      completed: true
    }
  ]

  addTask() {
    const task = {
      title: this.newTask,
      completed: false,
    }
    this.tasks.push(task);
    this.newTask = '';
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
  }


}
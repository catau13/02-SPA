import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  students = [
    {
      name: 'Juan',
      age: '10',
      email: 'juan@example.com'
    },
    {
      name: 'Carlos',
      age: '9',
      email: 'carlos@example.com'
    },
    {
      name: 'Maria',
      age: '12',
      email: 'maria@example.com'
    },
    {
      name: 'Pedro',
      age: '15',
      email: 'pedro@example.com'
    },
  ]

}

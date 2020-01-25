import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';
  textField= "";
    tasks=[];
    index:number=0;
    addTask(){
      this.tasks.push(this.textField)
    }
}

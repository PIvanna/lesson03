import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  //@ViewChild(ChildComponent) ChildComponent!: ChildComponent;
  public count: number = 0;
  public myTask: string = ''; 
  public task!: string;

  getCount(data: number): void {
    this.count = data;
  }

  
  
  addUser(): void {
    if(!(this.myTask == '')){
      this.task = this.myTask;
      this.myTask = '';
      ++this.count;
    }
  }
}


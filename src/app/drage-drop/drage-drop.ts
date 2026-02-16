import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drage-drop',
  standalone: true,
  imports: [DragDropModule],
  templateUrl: './drage-drop.html',
  styleUrl: './drage-drop.css',
})
export class DrageDrop {
items = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];

  drop(event: CdkDragDrop<string[]>) {
    // moveItemInArray is a helper function from the CDK
    // It updates the array index automatically
    console.log(event,this.items)
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonI } from '../person';

@Component({
  selector: 'app-tree-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './tree-component.html',
  styleUrl: './tree-component.css',
  standalone: true
})
export class TreeComponent {
  personTree: PersonI[] = [
    {
      personName: 'Bill',
      children: [
        {
          personName: 'Jack',
          children: [{ personName: 'Alex' },]
        },
        { personName: 'Bob' }
      ]
    },
    { personName: 'Cendra' }
  ]

}

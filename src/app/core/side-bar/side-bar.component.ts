import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Input() categorie: Categoria[] | null = [];
  @Output() select = new EventEmitter<number>()
  constructor() { }

  

  ngOnInit(): void {
  }

}

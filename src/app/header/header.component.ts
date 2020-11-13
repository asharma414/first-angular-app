import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter<string>();
  collapsed = true;
  
  constructor() { }

  onSelect(menuItem: string) {
    this.menuClick.emit(menuItem);
  }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuClick = new EventEmitter<string>();
  collapsed = true;
  
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSave() {
    this.dataStorageService.saveRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

}

import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  collapsed = true;

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe()
  }

  onSaveData() {
    this.dataStorageService.saveRecipes()
  }

  constructor(private dataStorageService: DataStorageService) {}
}

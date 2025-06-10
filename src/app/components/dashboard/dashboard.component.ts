import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
toggleSidebar() {
  const sidebarElement = document.querySelector('.sidebar');
  const contentWrapper = document.querySelector('.content-wrapper');
  
  if (sidebarElement && contentWrapper) {
    sidebarElement.classList.toggle('collapsed');
    contentWrapper.classList.toggle('full-width');
  }
}
}

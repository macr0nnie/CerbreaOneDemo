import { Component } from '@angular/core';

@Component({
  selector: 'app-site-layout',
  standalone: false,
  templateUrl: './site-layout.component.html',
  styleUrl: './site-layout.component.scss'
})
export class SiteLayoutComponent {
    sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  //choosing the navigation of the sites
}

import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [ MatButtonModule, MatSidenavModule, MatIconModule , MatListModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  menuItems = [
    { name: 'Home', icon: 'home', route: '/' },
    { name: 'Profile', icon: 'person', route: '/profile' },
    { name: 'Settings', icon: 'settings', route: '/settings' },
    { name: 'Help', icon: 'help', route: '/help' }
  ];
}

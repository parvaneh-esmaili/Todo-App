import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [NgFor,RouterLink,RouterLinkActive,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = [
    { item: 'List', url: './list' },
    { item: 'Add', url: '/add' }
  ];
toggleDarkMode() {
  document.body.classList.toggle('dark');
}

}

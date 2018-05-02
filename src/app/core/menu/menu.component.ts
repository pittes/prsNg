import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	menuItems: Menu[] = [
		new Menu('Home', '/home', 'This is the home menu item'),
    new Menu('User', '/user/list', 'This is the user menu item'),
		new Menu('About', '/about', 'This is the about menu item')
	];

  constructor() { }

  ngOnInit() {
  }

}

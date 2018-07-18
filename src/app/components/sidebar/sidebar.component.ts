import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/template',
    title: 'Template',
    icon: 'dashboard',
    class: ''
  },
  {
    path: '/print-tote',
    title: 'PrintTote',
    icon: 'dashboard',
    class: ''
  },
  {
    path: '/user-profile',
    title: 'Generate Order',
    icon: 'dashboard',
    class: ''
  },
  { path: '/icons', title: 'Assign Tote', icon: 'person', class: '' },
  {
    path: '/table-list',
    title: 'Print Tote',
    icon: 'content_paste',
    class: ''
  },
  { path: '/typography', title: 'Maintain', icon: 'library_books', class: '' },
  { path: '/dashboard', title: 'Monitor', icon: 'bubble_chart', class: '' },
  {
    path: '/notifications',
    title: 'Picked Data',
    icon: 'location_on',
    class: ''
  }
  // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
  // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}

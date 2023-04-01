import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {}

const ELEMENT_DATA: PeriodicElement[] = [
  {script: "npm run dev:ssr", detail: 'Similar to ng serve, which offers live reload during development, but uses server-side rendering. The application runs in watch mode and refreshes the browser after every change. This command is slower than the actual ng serve command.'},
  {script: "ng build && ng run app-DETAILS:server", detail: 'Builds both the server script and the application in production mode. Use this command when you want to build the project for deployment'},
  {script: "npm run serve:ssr", detail: 'Starts the server script for serving the application locally with server-side rendering. It uses the build artifacts created by ng run build:ssr, so make sure you have run that command as well.'},
  {script: "npm run prerender", detail: 'Used to prerender an application\'s pages. Read more about prerendering here.'},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  displayedColumns: string[] = ['script', 'detail'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
    console.log(this.dataSource);

  }


}

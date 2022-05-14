import { Component, OnInit } from '@angular/core';
import { path } from 'src/app/path-bootstraps';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss', ...path]
})
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

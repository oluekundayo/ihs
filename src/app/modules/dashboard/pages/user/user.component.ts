import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  order: any =[]
  constructor() {}
  ngOnInit(): void {
    let order
  }
}

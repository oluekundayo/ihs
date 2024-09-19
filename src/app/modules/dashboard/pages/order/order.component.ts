import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {

  order: any =[]
  constructor() {}
  ngOnInit(): void {
    let order
  }
}

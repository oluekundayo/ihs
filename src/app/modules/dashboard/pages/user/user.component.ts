import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AngularSvgIconModule, HeaderComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  order: any =[]
  constructor() {}
  ngOnInit(): void {
    let order
  }
  searchContent(data: string) {
    // search logic here
  }
}

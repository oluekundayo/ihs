import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [AngularSvgIconModule, HeaderComponent],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.scss'
})
export class FleetComponent {

}

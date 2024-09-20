import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [AngularSvgIconModule, HeaderComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {

}

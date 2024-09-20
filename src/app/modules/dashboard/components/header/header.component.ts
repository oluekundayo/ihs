import { Component, input, output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = input.required<string>();
  search = output<string>()
  inputElement: any;

  searchInput(event: Event) {
    this.inputElement = event.target as HTMLInputElement;
  }
  onSearch() {
    this.search.emit(this.inputElement);
  }

}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() headerClicked = new EventEmitter<string>();
  changeState(data) {
    if (data.target.textContent === 'Recipes') {
      this.headerClicked.emit('recipe');
    } else {
      this.headerClicked.emit('shopping-list');
    }
  }
}

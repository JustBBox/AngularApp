import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() stateOfHeader: String = 'recipe';
  onChange(data: string) {
    this.stateOfHeader = data;
  }
}

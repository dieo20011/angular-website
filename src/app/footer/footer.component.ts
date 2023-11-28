import { Component } from '@angular/core';
import { FAKE_TITLE } from '../data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  listItems: {id: number, title: string, details: string}[] = FAKE_TITLE;
}

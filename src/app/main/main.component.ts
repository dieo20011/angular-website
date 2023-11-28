import { Component } from '@angular/core';
import { FAKE_PLACE } from '../data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  listItems: {id: number, img: string, title: string, address: string, price: number}[] = FAKE_PLACE;
}

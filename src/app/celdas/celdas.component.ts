import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.css']
})
export class CeldasComponent {
  @Input() value: string = '?';
}

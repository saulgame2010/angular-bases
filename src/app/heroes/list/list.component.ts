import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Hulk', 'Dr. Strange', 'Iron Man'];
  public deletedHeroe?: string;

  removeLastHeroe(): void {
    const deletedHeroe = this.heroes.pop();
    this.deletedHeroe = deletedHeroe;
  }
}

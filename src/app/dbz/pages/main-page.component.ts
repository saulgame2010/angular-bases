import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character [] = [
    {
      name: 'Krilin',
      power: 1000
    },
    {
      name: 'Gokú',
      power: 9000
    },
    {
      name: 'Vegueta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteId(index: number): void {
    this.characters.splice(index, 1);
  }
}

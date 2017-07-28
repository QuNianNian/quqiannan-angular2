import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PokemonListComponent, PokemonInfoComponent, PokemonEditComponent]
})
export class PokemonModule { }

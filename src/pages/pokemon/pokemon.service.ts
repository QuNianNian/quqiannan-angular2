import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {

  pokemonList: Array<any> = [
    {
      "index": 1,
      "name": "妙蛙种子",
      "romIndex": 1,
      "attributes": ["草", "毒"]
    },{
      "index": 2,
      "name": "妙蛙草",
      "romIndex": 1,
      "attributes": ["草", "毒"]
    },{
      "index": 3,
      "name": "妙蛙花",
      "romIndex": 1,
      "attributes": ["草", "毒"]
    },{
      "index": 4,
      "name": "小火龙",
      "romIndex": 1,
      "attributes": ["火"]
    },{
      "index": 5,
      "name": "喷火龙",
      "romIndex": 1,
      "attributes": ["火"]
    },
  ]

  attributesList: Array<any> = [
    '水','普通','火','飞','虫','草'
    ,'钢','格斗','地','毒','电','岩石','冰','龙','恶','超能','鬼'
  ]
  constructor() { }

  getPokemons() {
    return this.pokemonList;
  }

  getattributesList() {
    return this.attributesList;
  }

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList:Array<any> = []

  attributesList:Array<any> = []

  attribute:any

  name:any


  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.pokemonList.sort(function (a, b){
      return a.index - b.index;
    });

  }

  sortByDesccending(){
    this.pokemonList.sort(function (a, b){
      return b.index - a.index;
    });
    
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  }
  sortByRadom(){
    this.pokemonList.forEach(user=>{ 
      user.romIndex = Math.random();
    });

    this.pokemonList.sort(function (a, b){
      return a.romIndex - b.romIndex;
    });
    
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }

  deletePokemon(pokemon){
    this.pokemonList.splice(this.pokemonList.indexOf(pokemon),1);
  }

  attributesSelect(){
    console.log(this.attribute);
    console.log(this.name);

    this.pokemonList.forEach(item=>{
      if(item.name == this.name) {
        item.attributes.forEach(attri=>{
          if(attri == this.attribute){
            item.romIndex = 0;
            this.pokemonList.sort(function (a, b){
              return a.romIndex - b.romIndex;
            });
          }
        })
      }else{
        item.romIndex = this.pokemonList.indexOf(item) + 1;
      }
    })

  }


  constructor(private poService: PokemonService) {
    this.pokemonList = poService.getPokemons();

    this.attributesList = poService.getattributesList();
   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss']
})
export class PokemonInfoComponent implements OnInit {

  infoPokemon:any = null;

  getStudentSubscribe:any;

  getPokemon(id: any): Promise<any> {      
      let p = new Promise((resolve,reject)=>{ 
       this.infoPokemon = id;
       let pokemon = this.poService.pokemonList.find(item=>item.id == id) 
       if(pokemon){ 
         resolve(pokemon) 
       }else{ 
         reject("student not found") 
       } 
     }) 

     console.log(p);
     return p 

 }

 ngOnInit() { 
     this.getStudentSubscribe = this.route.params.subscribe(params=>{ 
       this.infoPokemon = params['id'];
     })
   } 



  constructor(
    private poService: PokemonService,
  private route: ActivatedRoute, 
private location: Location 
) { 
    
  }

}

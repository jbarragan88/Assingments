import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon(), this.intPokemon(), this.numberType();
   }

  getPokemon(){
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => console.log("Data!", data));
  }

  intPokemon(){
    let intbulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    //for(var x = 0; x <  data['types'].length; x++){
      intbulbasaur.subscribe(data => 
        
        { 
          for(var x = 0; x <  data['types'].length; x++){
            console.log("Interesting! "+ x, data['types'][x]['type']['name']);
          }
        })
  }

  numberType(){
    let poison = this._http.get('https://pokeapi.co/api/v2/pokemon/10/');
    //for(var x = 0; x <  data['types'].length; x++){
      poison.subscribe(data => 
        
        { 
          
            var datatypeurl = data['types'][0]['type']['url'];
            let type = this._http.get(datatypeurl);
            type.subscribe(data =>
              {
                for(var i = 0; i < data['pokemon'].length; i++){
                  console.log("Pokemon with "+ data['name'] + i, data['pokemon'][i]['pokemon']['name']);
                }
                console.log('Number of Pokemon with Poison: #', data['pokemon'].length)
              })
          
        })
  }

}

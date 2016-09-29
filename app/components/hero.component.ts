import { Component } from '@angular/core';
import { Hero } from '../types/hero';
import { HeroService } from '../services/hero.service';

import { OnInit } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'hero-component',
    template: `
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes"
            (click)="onSelect(hero)"
            [class.selected]="hero === selectedHero"
            >
                <!-- each hero goes here -->
                <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>

       <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})


export class HeroComponent implements OnInit {

    constructor(private heroService: HeroService) {
        //this.heroes = this.heroService.getHeroes(); // THIS IS BAD to call such initialisation in the c'tor. Do it via Angular OnInit()
    }


    // Not required now
    //hero:Hero = {
    //    id: 1,
    //    name: 'Windstorm'
    //};

    title = 'Tour of Hereos';


    heroes: Hero[]; // heroes is an array of Hero's

    selectedHero: Hero;


    // Angular will call this function because we specify that this class implements the OnInit() interface
    ngOnInit(): void {
        this.getHeroes();
    }

    // Separated routine to call the service (which could be mocked)
    getHeroes(): void {
        //this.heroes = this.heroService.getHeroes(); // old synchronous call

        // now call via promise
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    // Select handler
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
        console.log(arguments);
    }


}

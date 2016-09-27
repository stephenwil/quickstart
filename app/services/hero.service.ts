import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {

    // This was a simple synchronous method, we really should even in a mock is return it asynchronously
    //getHeroes(): Hero[] {
    //  return HEROES;
    //}

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../service/hero.service';
import { MessageService } from '../service/message.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
    heroes: Hero[] = [];
    // selectedHero? : Hero;

    constructor(private heroService: HeroService, private messageService: MessageService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    add(name: string): void {
        name = name.trim();

        if (!name) 
            return;

        this.heroService.addHero({ name } as Hero)
            .subscribe(hero => {
                this.heroes.push(hero);
            });
    }

    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero.id).subscribe();
    }

    // onSelect(hero: Hero) {
    //   this.selectedHero = hero;
    //   this.messageService.add(`HeroListComponent: Selected hero id = ${hero.id}`);
    // }
}

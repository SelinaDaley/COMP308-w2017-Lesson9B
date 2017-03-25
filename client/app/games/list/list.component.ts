import { Component } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
    selector: 'list',
    templateUrl: 'app/games/list/list.template.html'
})
export class ListComponent {
    // Instance variables
    games: any;
    errorMessage: string;

    // Constructor
    constructor(private _gameService: GamesService) {
        console.log("------------- ListComponent ------------");

    }

    // Methods
    ngOnInit() {        
        this._gameService.list().subscribe(games => this.games = games);
        
    }
}
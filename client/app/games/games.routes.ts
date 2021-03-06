import { Routes } from '@angular/router';
import { GamesComponent } from './games.component';

// include sub comments
import { ListComponent } from './list/list.component';

export const GamesRoutes: Routes = [{
    path: 'api',
    component: GamesComponent,
    children: [
        { path: 'games', component: ListComponent }
    ]
}]
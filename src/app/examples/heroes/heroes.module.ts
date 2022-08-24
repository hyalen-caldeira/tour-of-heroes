import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MessagesComponent } from './messages/messages.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { ExamplesRoutingModule } from '../examples-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        MessagesComponent,
        HeroSearchComponent,
        HeroDetailComponent,
        HeroListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientModule,
        ReactiveFormsModule,
        ExamplesRoutingModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    exports: [ MessagesComponent ]
})
export class HeroesModule { }

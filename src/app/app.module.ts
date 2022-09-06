import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent } from './messages/messages.component';
import { InMemoryDataService } from './service/in-memory-data.service';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { NotificationStackComponent } from './notification-stack/notification-stack.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NotificationComponent } from './notification/notification.component';
import { SharedModule } from './examples/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent
        , DashboardComponent
        , MessagesComponent
        , HeroSearchComponent
        , HeroDetailComponent
        , HeroListComponent
        , NameEditorComponent
        , ProfileEditorComponent
        , NotificationStackComponent
        , NotificationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,

        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        )
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

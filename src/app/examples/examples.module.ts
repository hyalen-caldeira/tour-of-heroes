import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { FormsExampleModule } from './forms/forms-example.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
    declarations: [ ExamplesComponent ],
    imports: [ HeroesModule, FormsExampleModule, BrowserModule, ExamplesRoutingModule ],
    exports: [ ExamplesComponent ],
    providers: [
        // No need to place any providers due to the `providedIn` flag added to the services ...
    ],
    bootstrap: [ ExamplesComponent ]
})
export class ExamplesModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { FormsExampleModule } from './forms/forms-example.module';
import { HeroesModule } from './heroes/heroes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [ ExamplesComponent ],
    imports: [ 
        HeroesModule
        , SharedModule
        , FormsExampleModule
        , ExamplesRoutingModule 
    ],
    exports: [ ExamplesComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [
        // No need to place any providers due to the `providedIn` flag added to the services ...
    ],
    // bootstrap: [ ExamplesComponent ]
})
export class ExamplesModule { }

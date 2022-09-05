import { Component, ViewChild } from '@angular/core';
import { PupComponent } from './pup/pup.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';

    @ViewChild(PupComponent) pup!: PupComponent;
    
    ngAfterViewInit() {
        console.log(this.pup.whoAmI()); // I am a pup component!
    }
}

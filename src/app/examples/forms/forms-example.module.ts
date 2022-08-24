import { NgModule } from '@angular/core';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
    declarations: [ NameEditorComponent, ProfileEditorComponent ],
    imports: [
        ReactiveFormsModule
    ],
    exports: [ ]
})
export class FormsExampleModule { }

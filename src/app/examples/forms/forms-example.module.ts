import { NgModule } from '@angular/core';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NotificationStackComponent } from './notification-stack/notification-stack.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [ 
        NameEditorComponent
        , ProfileEditorComponent
        , NotificationStackComponent
        , NotificationComponent 
    ],
    imports: [
        BrowserModule
        , ReactiveFormsModule
    ],
    exports: [ ]
})
export class FormsExampleModule { }

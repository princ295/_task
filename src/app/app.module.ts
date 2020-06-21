import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component';
import { NotesCartComponent } from './pages/notes-cart/notes-cart.component';
import { NotesDetailsComponent } from './pages/notes-details/notes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NotesListComponent,
    NotesCartComponent,
    NotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

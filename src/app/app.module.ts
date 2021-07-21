import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { PersonDetailModalComponent } from './person-detail-modal/person-detail-modal.component';

export const routes: Routes = [
  { path: 'person-list', component: PersonListComponent },
  { path: 'detail/:id', component: PersonDetailComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    PersonDetailComponent,
    PersonDetailModalComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

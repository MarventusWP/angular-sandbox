import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { NewUserComponent } from './components/new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    NewUserComponent
  ],
  imports: [
	BrowserModule,
	HttpClientModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

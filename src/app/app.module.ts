import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { UpdateComponent } from './update/update.component';

const routes : Routes = [
  {path:``,component:AppComponent},
  {path:`user`,component:UserComponent},
  {path:`login`,component:LoginComponent},
  {path:`display`, component:DisplaydataComponent},
  {path:`update/:id`,component:UpdateComponent},
 
]
  
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DisplaydataComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

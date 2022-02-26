import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ListHelperService } from './services/list-helper.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ListHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

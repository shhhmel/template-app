import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { DataService } from './services/data.service';

import { SafeHtmlPipe } from './pipes/safe-html.pipe';

import { AppComponent } from './app.component';
import { TemplatesTableCmpComponent } from './components/templates-table-cmp/templates-table-cmp.component';
import { TemplateCmpComponent } from './components/template-cmp/template-cmp.component';
import { PageNotFoundCmpComponent } from './components/page-not-found-cmp/page-not-found-cmp.component';


const appRoutes: Routes = [
  { path: '',         component: TemplatesTableCmpComponent },
  { path: 'template/:id', component: TemplateCmpComponent },
  { path: '**',           component: PageNotFoundCmpComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TemplatesTableCmpComponent,
    TemplateCmpComponent,
    PageNotFoundCmpComponent,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

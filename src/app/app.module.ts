import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule,
  MatToolbarModule, MatCardModule, MatListModule,
  MAT_DIALOG_DEFAULT_OPTIONS, MatGridListModule, MatTableModule, 
  MatIconModule, MatSidenavModule, MatTooltipModule } from '@angular/material';

import { FlexLayoutModule} from '@angular/flex-layout';
import { from } from 'rxjs';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { SideMenuComponent } from './home/side-menu/side-menu.component';


const appRoutes: Routes = [ // 追加
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatIconModule, 
    MatSidenavModule,
    MatTooltipModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

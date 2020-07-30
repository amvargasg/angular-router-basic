import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

/**
 * The modules for angular material
 */
const MATERIAL_MODULES = [
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
]

@NgModule({
  exports: [MATERIAL_MODULES],
  imports: [MATERIAL_MODULES]
})
export class MaterialModule { }


@NgModule({
  declarations: [ AppComponent],
  imports: [ 
    AppRoutingModule, 
    BrowserModule, FormsModule, HttpModule 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

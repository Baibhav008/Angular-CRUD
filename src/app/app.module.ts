import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MasterService } from './services/master.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,HttpClientModule, NgbModule,FormsModule,ReactiveFormsModule,
    
  ],
  providers: [MasterService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

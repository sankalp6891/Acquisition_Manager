import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ag-grid
import { AgGridModule } from "ag-grid-angular";
//import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { AcquisitionManagerComponent } from './components/acquisition-manager/acquisition-manager.component';
import { CreateTargetComponent } from './components/create-target/create-target.component';
import { AcquisitionManagerService } from './services/acquisition-manager.service';


@NgModule({
  declarations: [
    AppComponent,
    AcquisitionManagerComponent,
    CreateTargetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AgGridModule.withComponents([AcquisitionManagerComponent])
    //ToastModule.forRoot()
  ],
  providers: [AcquisitionManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.moules';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { AccountpageComponent } from './accountpage/accountpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbCalendar, NgbTimeStruct, NgbTimeAdapter, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ProductpageComponent } from './productpage/productpage.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselDirective } from './carousel.directive';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { ScrollableItemDirective } from './scrollable-item.directive';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

export class CustomDateParserFormatter extends NgbDateParserFormatter {

  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  format(date: NgbDateStruct | null): string {
    return date ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year : '';
  }
}
@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

  readonly DELIMITER = '/';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        month : parseInt(date[0], 10),
        day : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return null;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? date.month + this.DELIMITER + date.day + this.DELIMITER + date.year : null;
  }
}

const pad = (i: number): string => i < 10 ? `0${i}` : `${i}`;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterpageComponent,
    AccountpageComponent,
    RegisterpageComponent,
    ProductpageComponent,
    CarouselDirective,
    ScrollableItemDirective
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
    ToastrModule.forRoot(
      {
        positionClass:'toast-center-center',
      }
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MDBBootstrapModulesPro
  ],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter},
  ],

  // schemas: [ NO_ERRORS_SCHEMA ],
  
  bootstrap: [AppComponent]
})



export class AppModule { }
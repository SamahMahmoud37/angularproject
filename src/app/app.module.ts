import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRouteModule } from './app.route.module';
import { DxSelectBoxModule } from 'devextreme-angular';
import { NewComponentComponent } from './new-component/new-component.component';
import { DxButtonModule } from 'devextreme-angular';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { DxAutocompleteModule,DxHtmlEditorModule  } from 'devextreme-angular';
import { DxAccordionModule } from 'devextreme-angular/ui/accordion';
import { DxFormModule ,DxCheckBoxModule, DxScrollViewModule, DxSortableModule } from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EditStudentComponent,
    LoginComponent,
    LayoutComponent,
    NewComponentComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    BrowserModule,FormsModule, ModalModule.forRoot(),HttpClientModule,AppRouteModule, DxSelectBoxModule,DxButtonModule,DxPopupModule,DxAutocompleteModule,DxAccordionModule,DxFormModule,DxCheckBoxModule ,DxDataGridModule,NgSelect2Module, DxScrollViewModule, DxSortableModule
,DxHtmlEditorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

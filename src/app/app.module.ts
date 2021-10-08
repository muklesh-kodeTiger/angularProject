import { NgModule,ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Treegrid
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { PageService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { SortService, ResizeService, ReorderService, ExcelExportService, PdfExportService, ContextMenuService,FreezeService, ColumnMenuService,ColumnChooserService } from '@syncfusion/ej2-angular-treegrid';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeGridAllModule,
    ButtonModule,
    DropDownListAllModule
  ],
  providers: [PageService, SortService,FilterService, EditService,ToolbarService,
  ResizeService, ExcelExportService,PdfExportService,ContextMenuService, FreezeService,ColumnMenuService,
ColumnChooserService, ReorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule,ViewChild } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
// import { PageService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid';
// import { SortService, ResizeService, ExcelExportService, PdfExportService, ContextMenuService,FreezeService,ColumnMenuService,ColumnChooserService } from '@syncfusion/ej2-angular-treegrid';
// import { AppComponent } from './app.component';
// import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
// import { GridModule } from '@syncfusion/ej2-angular-grids';
// import { GroupService } from '@syncfusion/ej2-angular-grids';
// import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

// /**
//  * Module
//  */
// @NgModule({
//     imports: [
//         BrowserModule,
//         TreeGridModule,
//         ButtonModule,
//         DropDownListAllModule,
       
//     ],
//     declarations: [AppComponent],
//     bootstrap: [AppComponent],
//     providers: [PageService,
//                 SortService,
//                 FilterService,EditService,
//                 SortService, ResizeService, 
//                 ExcelExportService, 
//                 PdfExportService, ContextMenuService,
//                 ToolbarService,FreezeService,ColumnMenuService,
//                 ColumnChooserService]
// })
// export class AppModule { }


// import { Component,OnInit,ViewChild } from '@angular/core';
// import { sampleData } from './datasource';
// import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
// import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
// import { MenuEventArgs } from '@syncfusion/ej2-navigations';
// import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
// import { GridComponent, ContextMenuService, PageService, ContextMenuItemModel } from '@syncfusion/ej2-angular-grids';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   providers: [ContextMenuService, PageService]
// })
// export class AppComponent implements OnInit {
//   [x: string]: any;

//   public data!: Object[];
//     public pager!: Object;
//     public editSettings!: Object;
//     public contextMenuItems!: Object[];
//     @ViewChild('grid')
//   public grid!: GridComponent;
//     @ViewChild('treegrid')
//   public treeGridObj!: TreeGridComponent;
//   FreezeService: any;
  
//   ngOnInit(): void {
//       this.data = sampleData;
//         this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true,mode:'Batch'};
//         this.contextMenuItems = [ 'Copy','Delete',
//         { text: 'Multi-Select', target: '.e-content', id: 'multiselect' } ,
//         { text: 'Cut', target: '.e-content', id: 'collapserow' } ,
//         { text: 'Paste', target: '.e-content', id: 'expandrow' } ,
//         { text: 'Add', target: '.e-content', id: 'expandrow' } ,
//         { text: 'Delete', target: '.e-content', id: 'collapserow' } ,
//         { text: 'Edit', target: '.e-content', id: 'expandrow' } ,
//         { text: 'Freeze-Column', target: '.e-gridheader', id: 'hidecols' },
//         { text: 'Filter-Column', target: '.e-gridheader', id: 'hidecols' },
//         { text: 'Multi-Sort', target: '.e-gridheader', id: 'hidecols' },
//         { text: 'Add', target: '.e-gridheader', id: 'hidecols' },
//         { text: 'Delete', target: '.e-gridheader', id: 'hidecols' },
//         { text: 'Edit', target: '.e-gridheader', id: 'hidecols' }  
//         ];
//         this.pager = { pageSize: 8 }
//   }
//   contextMenuClick(args?: MenuEventArgs): void {
//     this.treeGridObj.getColumnByField('taskID');
//     if (args.item.id === 'multiselect') {
//         this.frozenColumns;
//         ;
//     } 
// }
  
//   }


import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {  ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'treeGridDemo';
  public data: Object[];
   public pager: Object;
    public editSettings: Object;
    public contextMenuItems: Object[];
    public columnMenuItems: Object[];
    public toolbar: string[];
    @ViewChild('treeGridObj')
    public treeGridObj: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbar = ['ColumnChooser'];
        this.editSettings = {allowEditing: true, allowAdding: true};
       this.contextMenuItems =  ['Copy','Delete',
               { text: 'Cut', target: '.e-content', id: 'collapserow' } ,
               { text: 'Paste', target: '.e-content', id: 'expandrow' } ,
               { text: 'Add', target: '.e-content', id: 'expandrow' } ,
               { text: 'Delete', target: '.e-content', id: 'collapserow' } ,
               { text: 'Edit', target: '.e-content', id: 'expandrow' } ,
               { text: 'Multi-Select', target: '.e-content', id: 'multiselect' } ,
                {text: 'Freeze On', target: '.e-content', id: 'freezeon'},
               {text: 'Freeze Off', target: '.e-content', id: 'freezeoff'},
               { text: 'Freeze on', target: '.e-gridheader', id: 'hidecols' },
               { text: 'Freeze off', target: '.e-gridheader', id: 'hidecols' },
               { text: 'Filter-Column', target: '.e-gridheader', id: 'hidecols' },
                { text: 'Multi-Sort', target: '.e-gridheader', id: 'hidecols' },
                { text: 'Add', target: '.e-gridheader', id: 'hidecols' },
                { text: 'Delete', target: '.e-gridheader', id: 'hidecols' },
                { text: 'Edit', target: '.e-gridheader', id: 'hidecols' } 
            ];
    }
// Column Menu click event
// columnMenuClick(arg?: MenuEventArgs): void{
//   console.log("Menu: "+arg.item.text + " "+arg.item.id);
//   if(arg.item.id === 'freezeon'){

//   this.treeGridObj.frozenColumns=2;
//   }
//  if(arg.item.id === 'freezeoff')
//   {this.treeGridObj.frozenColumns=0;}

// }
contextMenuClick(args?: MenuEventArgs): void {
        this.treeGridObj.getColumnByField('taskID');
        console.log("hello : "+this.treeGridObj.getSelectedRows()[0].innerHTML);
      if (args.item.id === 'freezeon') {
          //this.treeGridObj.frozenRows(<HTMLTableRowElement>(this.treeGridObj.getSelectedRows()[0]));
        // this.treeGridObj.grid.row
        //this.treeGridObj.frozenColumns=2;
        //this.treeGridObj.getselect
        
        let selectedrowindex: number[] = this.treeGridObj.getSelectedRowIndexes();
        //alert ("selectedrowindex: "+selectedrowindex[0]);
        //alert("treegrid.getColumnByField:"+this.treeGridObj.getColumnByField("taskName") );
        //alert("Column:" +this.treeGridObj.getColumnIndexByField('taskName'));
        //this.treeGridObj.frozenColumns =1;
        //this.treeGridObj.refreshColumns();

        this.treeGridObj.frozenRows=selectedrowindex[0];
          console.log("Selected row: "+this.treeGridObj.getSelectedRowIndexes);
       }
if (args.item.id === 'freezeoff') {
   this.treeGridObj.frozenRows=0;}

    }
}

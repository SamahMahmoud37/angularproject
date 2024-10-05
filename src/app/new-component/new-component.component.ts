import { Component, Inject, OnInit } from '@angular/core';
import { Customer, customers} from '../Customer';
import { DxSortableTypes } from 'devextreme-angular/ui/sortable';
import { Employee, productService, Task } from '../productService';
// import { DxPopupComponent } from 'devextreme-angular/ui/popup';
// import { Customer, customers } from '../model/customer';


@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css'],
  providers: [productService]
})
export class NewComponentComponent implements OnInit {
  lists: Task[][] = [];

  statuses = ['Not Started', 'Need Assistance', 'In Progress', 'Deferred', 'Completed'];

  employees: any = {};

  constructor(service: productService) {
    const tasks = service.getTasks();

    service.getEmployees().forEach((employee) => {
      this.employees[employee.ID] = employee.Name;
    });

    this.statuses.forEach((status) => {
      this.lists.push(tasks.filter((task) => task.Task_Status === status));
    });
  }

  onListReorder(e: DxSortableTypes.ReorderEvent) {
    const list = this.lists.splice(e.fromIndex, 1)[0];
    this.lists.splice(e.toIndex, 0, list);

    const status = this.statuses.splice(e.fromIndex, 1)[0];
    this.statuses.splice(e.toIndex, 0, status);
  }

  onTaskDragStart(e: DxSortableTypes.DragStartEvent) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTaskDrop(e: DxSortableTypes.AddEvent) {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }


  popupVisible = false;
  isChecked = false;
  dataSource: any[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // ... more items
  ];
  employee = {
    name: 'John Heart',
    officeNumber: 901,
    hireDate: new Date(2012, 4, 13),
    notes: 'John has been in the Audio/Video industry since 1990.'
}
dataSource2: any[] = [
  { id: 1, name: 'Item 1', price: 10 },
  { id: 2, name: 'Item 2', price: 20 },
  // ... more items
];

columns: any[] = [
  { dataField: 'id', caption: 'ID' },
  { dataField: 'name', caption: 'Name' },
  { dataField: 'price', caption: 'Price' }
];
title: string = 'color-grid-app';
  datasource: Customer[] = [];
  ngOnInit(): void {
    this.datasource = customers;
  }

submitButtonOptions = {
  text: "Submit the Form",
  useSubmitBehavior: true
}

handleSubmit = function(e:any) {
  setTimeout(() => { 
      alert("Submitted");          
  }, 1000);

  e.preventDefault();
}
hireDateOptions = {
  // disabled: true
}
  dataSource1: any[] = [
    { title: 'Section 1', content: 'Content for Section 1' },
    { title: 'Section 2', content: 'Content for Section 2' },
    // ... more items
  ];
 
  onFocused() {
    // Handle focused event
  }
  // constructor(@Inject(DxPopupComponent)private popupService: DxPopupComponent) {}
  onValueChange(e:any) {
    console.log(e.previousValue);
    console.log(e.value);
}
  openModal() {
    this.popupVisible = true;
  }

  onPopupHidden() {
    this.popupVisible = false;
  }
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  selectedItem: string = '';
  products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
  ];
  dropDownOptions = {
    height: 150
}

  onValueChanged(e:any) {
    console.log(e);
    console.log(e.value);
}
addColor(e: any): void{
  if (e.rowType === 'data' && e.column.dataField === "state") {
    const state = e.data.state;

    switch (state) {
      case 'Arkansas':
        /*OPTION #1 */
        e.cellElement.style.cssText = "background-color: #FFFF00";
        break;
      case 'Georgia':
        /*OPTION #2 */
        e.cellElement.className = 'stateGeorgia';
        break;
      case 'Minnesota':
        /*OPTION #3 */
        e.cellElement.classList.add('stateMinnesota');
        break;
      default:
        break;
    }
  }
}
editorValue: string = '<p>هذا هو النص الافتراضي</p>';

isMultiline:boolean = true;

valueContent!: string;

tabs: any[]= [
  { name: 'From This Device', value: ['file'] },
  { name: 'From the Web', value: ['url'] },
  { name: 'Both', value: ['file', 'url'] }
];

currentTab!: string[];
}


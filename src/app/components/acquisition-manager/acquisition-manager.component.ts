//import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AcquisitionManagerService } from './../../services/acquisition-manager.service';
import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Status } from '../../models/status.enum';
import { Performance } from '../../models/performance.enum';
import { GridOptions } from 'ag-grid';
import { Target } from '../../models/target.model';

@Component({
  selector: 'app-acquisition-manager',
  templateUrl: './acquisition-manager.component.html',
  styleUrls: ['./acquisition-manager.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AcquisitionManagerComponent implements OnInit {
  public gridOptions: GridOptions;
  public columnDefs: any[];
  public rowData: any[];

  constructor(private acquisitionManagerService: AcquisitionManagerService,
    private vcr: ViewContainerRef) {}

  ngOnInit() {
    this.columnDefs = [
      { headerName: "Status", field: "Status", width: 100 },
      { headerName: "Company Info", field: "CompanyInfo", width: 300 },
      { headerName: "Key Contacts", field: "KeyContacts", width: 300 },
      { headerName: "Financial Performance", field: "Performance" }
    ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData : Object.assign([], this.acquisitionManagerService.targets),
      rowSelection: 'single',
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
        params.api.selectNode(params.api.getRowNode('0'));
      }
    }
  }

  public onRowSelectionChanged(selectedRow) {
    if (selectedRow && selectedRow.api && selectedRow.api.getSelectedRows().length > 0) {
      this.acquisitionManagerService.selectedTarget = Object.assign([], selectedRow.api.getSelectedRows()[0]);
      this.acquisitionManagerService.selectedTarget.Performance = Performance[this.acquisitionManagerService.selectedTarget.Performance];
      this.acquisitionManagerService.selectedTarget.Status = Status[this.acquisitionManagerService.selectedTarget.Status];
    }
  }

  public deleteTarget() {
    if (this.gridOptions.api.getSelectedRows()
      && this.gridOptions.api.getSelectedRows().length > 0) {
      let rowToDelete = this.gridOptions.api.getSelectedRows()[0];
      this.gridOptions.api.updateRowData({ remove: [rowToDelete] });
      this.acquisitionManagerService.selectedTarget = new Target(-1, '', '', '', '');
    }else{
      //this.toastr.error('Please selete a Target to delete!', 'Error!');
    }
  }

  public addTarget() {
    this.gridOptions.api.deselectAll();
    this.acquisitionManagerService.selectedTarget = new Target(-1, '', '', '', '');
  }
}

import { AcquisitionManagerService } from './../../services/acquisition-manager.service';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { Status } from '../../models/status.enum';
import { Performance } from '../../models/performance.enum';
import { Target } from '../../models/target.model';
import { GridOptions } from 'ag-grid';
//import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent implements OnInit {
  @Input() targetGridOptions: GridOptions;
  
  public optionsStatus = [];
  public optionsPerformance = [];

  constructor(public acquisitionManagerService: AcquisitionManagerService,
     vcr: ViewContainerRef) {
    //this.toastr.setRootViewContainerRef(vcr);
    this.optionsStatus = this.acquisitionManagerService.bindStatusList();
    this.optionsPerformance = this.acquisitionManagerService.bindPerformanceList();

  }

  ngOnInit() {
  }

  public saveUpdateTarget() {
    if (this.acquisitionManagerService.selectedTarget.CompanyInfo === '' ||
      this.acquisitionManagerService.selectedTarget.KeyContacts === '' ||
      this.acquisitionManagerService.selectedTarget.Status === '' ||
      this.acquisitionManagerService.selectedTarget.Performance === '') {
      //this.toastr.error('Please enter all input fields!', 'Error!');
      return false;
    }
    if (!this.acquisitionManagerService.selectedTarget || this.acquisitionManagerService.selectedTarget.id === -1) {
      let newTarget = new Target((this.targetGridOptions.api.getDisplayedRowCount() + 1), Status[this.acquisitionManagerService.selectedTarget.Status], this.acquisitionManagerService.selectedTarget.CompanyInfo, this.acquisitionManagerService.selectedTarget.KeyContacts, Performance[this.acquisitionManagerService.selectedTarget.Performance]);
      this.targetGridOptions.api.insertItemsAtIndex(this.targetGridOptions.api.getDisplayedRowCount(), [newTarget]);
      //this.toastr.success('Target Added Sucessfully!', 'Success!', { 'positionClass': 'toast-bottom-right' });
    } else {
      var rowNode = this.targetGridOptions.api.getRowNode((this.acquisitionManagerService.selectedTarget.id - 1).toString());
      if (!rowNode) {
        rowNode = this.targetGridOptions.api.getDisplayedRowAtIndex(this.acquisitionManagerService.selectedTarget.id - 1);
      }
      rowNode.setDataValue("Status", Status[this.acquisitionManagerService.selectedTarget.Status]);
      rowNode.setDataValue("CompanyInfo", this.acquisitionManagerService.selectedTarget.CompanyInfo);
      rowNode.setDataValue("KeyContacts", this.acquisitionManagerService.selectedTarget.KeyContacts);
      rowNode.setDataValue("Performance", Performance[this.acquisitionManagerService.selectedTarget.Performance]);
      //this.toastr.success('Target Updated Sucessfully!', 'Success!', { 'positionClass': 'toast-bottom-right' });
    }
  }

}

import { Target } from './../models/target.model';
import { Injectable } from '@angular/core';
import { Performance } from '../models/performance.enum';
import { Status } from '../models/status.enum';

@Injectable()
export class AcquisitionManagerService {
  public targets: Target[] = [];
  public selectedTarget: Target = new Target(-1, '', '', '', '');

  constructor() {
    this.targets.push({ id: 1, Status: Status[Status.Approved], CompanyInfo: "Quest Corporation", KeyContacts: 'Mr Diwan', Performance: Performance[Performance.Excellent] });
    this.targets.push({ id: 2, Status: Status[Status.Pending], CompanyInfo: "IT Solutions Ltd.", KeyContacts: 'Miss Vrinda', Performance: Performance[Performance.Good] });
    this.targets.push({ id: 3, Status: Status[Status.Approved], CompanyInfo: "Avengers Corp", KeyContacts: 'Mr Sankalp', Performance: Performance[Performance.Average] });
    this.targets.push({ id: 1, Status: Status[Status.Approved], CompanyInfo: "Bold Corporation", KeyContacts: 'Mr Diwan', Performance: Performance[Performance.Excellent] });
    this.targets.push({ id: 2, Status: Status[Status.Pending], CompanyInfo: "Accent Ltd.", KeyContacts: 'Miss Vrinda', Performance: Performance[Performance.Good] });
    this.targets.push({ id: 3, Status: Status[Status.Approved], CompanyInfo: "Qualq Corp", KeyContacts: 'Mr Sankalp', Performance: Performance[Performance.Average] });
    this.targets.push({ id: 1, Status: Status[Status.Approved], CompanyInfo: "Kanaban Firm", KeyContacts: 'Mr Diwan', Performance: Performance[Performance.Excellent] });
    this.targets.push({ id: 2, Status: Status[Status.Pending], CompanyInfo: "ITBI Solutions Ltd.", KeyContacts: 'Miss Vrinda', Performance: Performance[Performance.Good] });
    this.targets.push({ id: 3, Status: Status[Status.Approved], CompanyInfo: "Anitque Corp", KeyContacts: 'Mr Sankalp', Performance: Performance[Performance.Average] });
  }

  public addNewTargets(newTarget: Target) {
    this.targets.push(newTarget);
  }

  public bindStatusList() {
    const optionsStatus = [];
    optionsStatus.push({ id: Status.Approved, name: Status[Status.Approved] });
    optionsStatus.push({ id: Status.Declined, name: Status[Status.Declined] });
    optionsStatus.push({ id: Status.Pending, name: Status[Status.Pending] });
    return optionsStatus;
  }

  public bindPerformanceList() {
    const optionsPerformance = [];
    optionsPerformance.push({ id: Performance.Excellent, name: Performance[Performance.Excellent] });
    optionsPerformance.push({ id: Performance.Good, name: Performance[Performance.Good] });
    optionsPerformance.push({ id: Performance.Average, name: Performance[Performance.Average] });
    return optionsPerformance;
  }

}

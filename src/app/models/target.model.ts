export class Target {
    id: number;
    Status: string;
    CompanyInfo: string;
    KeyContacts: string;
    Performance: string;
    constructor(id: number, status: string, companyInfo: string, keyContacts: string, performance: string) {
        this.id = id;
        this.Status = status;
        this.CompanyInfo = companyInfo;
        this.KeyContacts = keyContacts;
        this.Performance = performance;
    }
}

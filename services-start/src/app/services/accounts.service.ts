import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  constructor(private loggingService: LoggingService) {}

  addAccount = (name: string, status: string) => {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status)
  };
  updateStatus = (id: number, newStatus: string) => {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  };

  statusUpdatedEvent = new EventEmitter<string>();
}
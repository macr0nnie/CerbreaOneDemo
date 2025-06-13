import { Component, OnInit } from '@angular/core';
import { TableColumn, TableAction } from '../../common/custom-table/custom-table.component';

@Component({
  selector: 'app-communication-table',
  standalone: false,
  templateUrl: './communication-table.component.html',
  styleUrl: './communication-table.component.scss'
})
export class CommunicationTableComponent implements OnInit {
  // Sample data for communications
  communications: any[] = [];
  
  // Define columns for the table
  tableColumns: TableColumn[] = [
    { 
      key: 'id', 
      header: 'ID', 
      sortable: true,
      width: '70px'
    },
    { 
      key: 'subject', 
      header: 'Subject', 
      sortable: true, 
      filterable: true 
    },
    { 
      key: 'sender', 
      header: 'From', 
      sortable: true, 
      filterable: true 
    },
    { 
      key: 'recipients', 
      header: 'To', 
      filterable: true 
    },
    { 
      key: 'timestamp', 
      header: 'Date', 
      sortable: true,
      format: (value) => new Date(value).toLocaleString()
    },
    { 
      key: 'status', 
      header: 'Status', 
      filterable: true,
      format: (value) => this.getStatusBadge(value)
    }
  ];
  
  // Define actions for each row
  tableActions: TableAction[] = [
    {
      label: 'View',
      icon: 'pi pi-eye',
      action: 'view',
      class: 'view'
    },
    {
      label: 'Reply',
      icon: 'pi pi-reply',
      action: 'reply',
      class: 'edit',
      // Only show reply for received messages
      showFn: (item) => item.type === 'received'
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      action: 'delete',
      class: 'delete'
    }
  ];
  
  constructor() {}
  
  ngOnInit(): void {
    // Load mock data
    this.loadCommunications();
  }
  
  loadCommunications(): void {
    // In a real app, this would come from a service
    this.communications = [
      {
        id: 1,
        subject: 'Project Status Update',
        sender: 'john.doe@example.com',
        recipients: 'team@example.com',
        body: 'The project is on track for delivery next week.',
        timestamp: new Date('2025-06-10T09:30:00'),
        status: 'read',
        type: 'received'
      },
      {
        id: 2,
        subject: 'Meeting Invitation',
        sender: 'manager@example.com',
        recipients: 'you@example.com',
        body: 'Please join us for a project kickoff meeting.',
        timestamp: new Date('2025-06-09T14:00:00'),
        status: 'unread',
        type: 'received'
      },
      {
        id: 3,
        subject: 'Vacation Request',
        sender: 'you@example.com',
        recipients: 'hr@example.com',
        body: 'I would like to request vacation days for next month.',
        timestamp: new Date('2025-06-08T11:45:00'),
        status: 'sent',
        type: 'sent'
      },
      {
        id: 4,
        subject: 'Quarterly Report',
        sender: 'system@example.com',
        recipients: 'all-staff@example.com',
        body: 'The quarterly report is now available for review.',
        timestamp: new Date('2025-06-07T16:15:00'),
        status: 'read',
        type: 'received'
      },
      {
        id: 5,
        subject: 'New Client Onboarding',
        sender: 'you@example.com',
        recipients: 'client@example.com',
        body: 'Welcome to our service! Here are the next steps.',
        timestamp: new Date('2025-06-06T10:00:00'),
        status: 'sent',
        type: 'sent'
      }
    ];
  }
  
  handleCommunicationAction(event: {action: string, item: any}): void {
    const { action, item } = event;
    
    switch(action) {
      case 'view':
        this.viewCommunication(item);
        break;
      case 'reply':
        this.replyCommunication(item);
        break;
      case 'delete':
        this.deleteCommunication(item);
        break;
    }
  }
  
  viewCommunication(communication: any): void {
    // In a real app, this would open a detail view or modal
    console.log('Viewing communication:', communication);
    // If unread, mark as read
    if (communication.status === 'unread') {
      communication.status = 'read';
    }
  }
  
  replyCommunication(communication: any): void {
    // In a real app, this would open a reply form
    console.log('Replying to communication:', communication);
  }
  
  deleteCommunication(communication: any): void {
    // In a real app, this would show a confirmation dialog
    if (confirm(`Are you sure you want to delete the message: "${communication.subject}"?`)) {
      console.log('Deleting communication:', communication);
      this.communications = this.communications.filter(c => c.id !== communication.id);
    }
  }
  
  getStatusBadge(status: string): string {
    switch(status) {
      case 'read': return 'Read';
      case 'unread': return 'Unread';
      case 'sent': return 'Sent';
      default: return status;
    }
  }
}
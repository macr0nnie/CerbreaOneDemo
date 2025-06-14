import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

export interface TableColumn {
  key: string;       // Property name in the data object
  header: string;    // Display name in table header
  sortable?: boolean; // Whether column can be sorted
  filterable?: boolean; // Whether column can be filtered
  width?: string;    // Optional width for the column
  format?: (value: any) => string; // Optional formatter function
  hidden?: boolean;  // Whether to hide the column
}

export interface TableAction {
  label: string;     // Button text
  icon?: string;     // Optional icon class
  class?: string;    // CSS class
  action: string;    // Action identifier
  showFn?: (item: any) => boolean; // Optional function to determine visibility
}

export interface SortConfig {
  column: string;
  direction: 'asc' | 'desc';
}

@Component({
  selector: 'app-custom-table',
  standalone: false,
  templateUrl: './custom-table.component.html',
  styleUrl: './custom-table.component.scss'
})
export class CustomTableComponent implements OnInit, OnChanges {
  @Input() data: any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() actions: TableAction[] = [];
  @Input() enableFiltering: boolean = true;
  @Input() pageSize: number = 10;
  @Input() showPagination: boolean = true;
  @Input() emptyMessage: string = 'No records found';
  
  @Output() rowAction = new EventEmitter<{action: string, item: any}>();
  @Output() pageChange = new EventEmitter<number>();
  
  filteredData: any[] = [];
  displayData: any[] = [];
  filterForm: FormGroup;
  
  currentPage: number = 1;
  totalPages: number = 1;
  
  sortConfig: SortConfig | null = null;
  
  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({});
  }
  
  ngOnInit(): void {
    this.initFilterForm();
    this.applyFilters();
    
    // Apply filters when form values change
    this.filterForm.valueChanges.pipe(
      debounceTime(300) // Wait 300ms after last change
    ).subscribe(() => {
      this.applyFilters();
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns'] || changes['data']) {
      this.initFilterForm();
      this.applyFilters();
    }
  }
  
  initFilterForm(): void {
    // Reset form
    this.filterForm = this.fb.group({});
    
    // Create form controls for filterable columns
    this.columns.forEach(column => {
      if (column.filterable) {
        this.filterForm.addControl(column.key, this.fb.control(''));
      }
    });
  }
  
  applyFilters(): void {
    const filterValues = this.filterForm.value;
    
    // Apply all filters
    this.filteredData = this.data.filter(item => {
      // Item matches if it passes all non-empty filters
      return Object.keys(filterValues).every(key => {
        const filterValue = filterValues[key]?.toLowerCase();
        if (!filterValue) return true; // Skip empty filters
        
        const itemValue = String(item[key] || '').toLowerCase();
        return itemValue.includes(filterValue);
      });
    });
    
    // Apply sorting if set
    if (this.sortConfig) {
      const { column, direction } = this.sortConfig;
      this.filteredData = [...this.filteredData].sort((a, b) => {
        const aValue = a[column];
        const bValue = b[column];
        
        const comparison = this.compare(aValue, bValue);
        return direction === 'asc' ? comparison : -comparison;
      });
    }
    
    // Update pagination
    this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
    
    // Slice data for current page
    this.updateDisplayData();
  }
  
  updateDisplayData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayData = this.filteredData.slice(startIndex, startIndex + this.pageSize);
  }
  
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayData();
      this.pageChange.emit(page);
    }
  }
  
  onSortClick(column: TableColumn): void {
    if (!column.sortable) return;
    
    if (!this.sortConfig || this.sortConfig.column !== column.key) {
      // New sort
      this.sortConfig = { column: column.key, direction: 'asc' };
    } else {
      // Toggle direction or clear
      if (this.sortConfig.direction === 'asc') {
        this.sortConfig.direction = 'desc';
      } else {
        this.sortConfig = null; // Clear sort
      }
    }
    
    this.applyFilters();
  }
  
  getSortIcon(column: TableColumn): string {
    if (!column.sortable) return '';
    
    if (!this.sortConfig || this.sortConfig.column !== column.key) {
      return 'pi pi-sort'; // Default icon
    } else {
      return this.sortConfig.direction === 'asc' ? 
        'pi pi-sort-amount-up' : 'pi pi-sort-amount-down';
    }
  }
  
  onActionClick(action: TableAction, item: any): void {
    this.rowAction.emit({ action: action.action, item });
  }
  
  shouldShowAction(action: TableAction, item: any): boolean {
    if (!action.showFn) return true;
    return action.showFn(item);
  }
  
  clearFilters(): void {
    this.filterForm.reset();
    this.applyFilters();
  }
  
  private compare(a: any, b: any): number {
    if (a === b) return 0;
    
    if (a === null || a === undefined) return -1;
    if (b === null || b === undefined) return 1;
    
    // Handle numbers
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }
    
    // Handle dates
    if (a instanceof Date && b instanceof Date) {
      return a.getTime() - b.getTime();
    }
    
    // Default string comparison
    return String(a).localeCompare(String(b));
  }
  
  formatCellValue(item: any, column: TableColumn): string {
    const value = item[column.key];
    
    if (column.format) {
      return column.format(value);
    }
    
    if (value === null || value === undefined) {
      return '';
    }
    
    return String(value);
  }
}
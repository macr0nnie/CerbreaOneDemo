import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexChart,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
  ChartComponent
} from "ng-apexcharts";

import { mockUsers } from "../../models/mockusers";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;

};
@Component({
  selector: 'app-samplekpi',
  standalone: false,
  templateUrl: './samplekpi.component.html',
  styleUrl: './samplekpi.component.scss'
})
export class SamplekpiComponent implements OnInit {
 @ViewChild("departmentChart") departmentChart!: ChartComponent;
public departmentChartOptions!: ChartOptions;
  
@ViewChild("statusChart") statusChart!: ChartComponent;
public statusChartOptions!: ChartOptions;
  constructor() {}
  
  ngOnInit(): void {
    this.initDepartmentChart();
    this.initStatusChart();
  }
  
  private initDepartmentChart(): void {
    // Count users by department
    const departmentCounts = mockUsers.reduce((acc, user) => {
      acc[user.department] = (acc[user.department] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Convert to series and labels
    const departments = Object.keys(departmentCounts);
    const counts = departments.map(dept => departmentCounts[dept]);

    this.departmentChartOptions = {
      series: counts,
      chart: {
        type: "donut",
        height: 350
      },
      labels: departments,
      colors: ["#0048bd", "#ff8e55", "#06d6a0", "#ef476f", "#ffd166"],
      title: {
        text: "Employees by Department",
        align: "center"
      },
      dataLabels: {
        enabled: true
      }
    };
  }
   private initStatusChart(): void {
    // Count active vs inactive users
    const activeUsers = mockUsers.filter(user => user.isActive).length;
    const inactiveUsers = mockUsers.length - activeUsers;

    this.statusChartOptions = {
      series: [activeUsers, inactiveUsers],
      chart: {
        type: "pie",
        height: 350
      },
      labels: ["Active", "Inactive"],
      colors: ["#06d6a0", "#ef476f"],
      title: {
        text: "Employee Status",
        align: "center"
      },
      dataLabels: {
        enabled: true
      }
    };
  }
}



  



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Staff } from '../../models/staff';
import { StaffService } from '../../services/staff.service';



@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']

})
export class StaffListComponent {


  staffs: Staff[] = [];

  constructor(private staffService: StaffService) { 
      this.onload();
  }

  onload(): void {
    this.staffService.getStaffs().subscribe((data: Staff[]) => {
      this.staffs = data;
    });
  }

  deleteStaff(id: number): void {
    this.staffService.deleteStaff(id).subscribe(() => {
      this.staffs = this.staffs.filter(staff => staff.guidId !== id);
    });
  }
}

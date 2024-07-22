import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'; // Import Router
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-staff-details',
  standalone: true,
  imports:  [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './staff-details.component.html',
  styleUrl: './staff-details.component.css'
})
export class StaffDetailsComponent {
  staff: Staff = {} as Staff; // Initialize with an empty object or a default value

  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private router: Router 
  ) {  this.onload();

        
    }

  onload(): void {
   
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0; // Handle null case appropriately

    this.staffService.getStaff(id).subscribe((data: Staff) => {
      this.staff = data;
    });
  }
  updateStaff(): void {
    this.staffService.updateStaff(this.staff.guidId, this.staff).subscribe(() => {
      this.router.navigate(['/staffs']);
    });
  }

}

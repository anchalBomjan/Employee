import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-staff-edit',
  standalone: true,
  // imports: [FormsModule],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  templateUrl: './staff-edit.component.html',
  styleUrl: './staff-edit.component.css'
})
export class StaffEditComponent {
  staff: Staff = {
    guidId: 0,
    name: '',
    description: '',
    phone: '',
    salary: ''
  };
  constructor(
    private route: ActivatedRoute,
    private staffService: StaffService,
    private router: Router
  ) { this.onload();}

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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-staff-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './staff-create.component.html',
  styleUrl: './staff-create.component.css'
})
export class StaffCreateComponent {
  staff: Staff = {
    guidId: 0,
    name: '',
    description: '',
    phone: '',
    salary: ''
  };
  constructor(private staffService: StaffService, private router: Router) { }

  createStaff(): void {
    console.log("Fail");
    this.staffService.addStaff(this.staff).subscribe(() => {
      this.router.navigate(['/staffs']);
    });
  }


}

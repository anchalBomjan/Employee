import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private apiUrl = 'https://localhost:44379/api/Staffs'; // Update with your API URL

  constructor(private http: HttpClient) { }

  getStaffs(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.apiUrl);
  }

  getStaff(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.apiUrl}/${id}`);
  }

  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.apiUrl, staff);
  }

  updateStaff(id: number, staff: Staff): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, staff);
  }

  deleteStaff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

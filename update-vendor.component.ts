import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-update-vendor',
  templateUrl: './update-vendor.component.html',
  styleUrls: ['./update-vendor.component.css']
})
export class UpdateVendorComponent implements OnInit {
  vendorToUpdate: Vendor = {
    vendorID: 0,
    vendorLongName: '',
    vendorCode: '',
    vendorPhoneNumber: '',
    vendorEmail: '',
    vendorCreatedOn: '',
    isActive: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const vendorIdToUpdate = +params['id'];
      if (vendorIdToUpdate > 0) {
        this.getVendorDetails(vendorIdToUpdate);
      }
    });
  }

  getVendorDetails(vendorId: number): void {
    this.http.get<Vendor>(`https://localhost:7159/api/Vendor/${vendorId}`)
      .subscribe(
        (data) => {
          this.vendorToUpdate = data;
        },
        (error) => {
          console.error('Error fetching vendor details:', error);
        }
      );
  }

  updateVendor(): void {
    // Send PUT request to update the vendor
    this.http.put(`https://localhost:7159/api/Vendor/${this.vendorToUpdate.vendorID}`, this.vendorToUpdate)
      .subscribe(
        () => {
          console.log('Vendor updated successfully');
          // Redirect to the view-vendor page
          this.router.navigate(['/vendor-operations/view']);
        },
        (error) => {
          console.error('Error updating vendor:', error);
        }
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { RegisService } from 'src/app/regis.service';

@Component({
  selector: 'app-aadharlist',
  templateUrl: './aadharlist.component.html',
  styleUrls: ['./aadharlist.component.css']
})
export class AadharlistComponent implements OnInit {

  Aadhar: any = [];

  constructor(private apiService: RegisService) {
    this.readaadhar();
  }
  ngOnInit() {}

  readaadhar() {
    this.apiService.getaadhar().subscribe((data) => {
      this.Aadhar = data;
      console.log("Aadhar data :"+this.Aadhar);
    });
  }

  removeaadhar(pan, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteaadhar(pan._id).subscribe((data) => {
        this.Aadhar.splice(index, 1);
      });
    }
  }

}

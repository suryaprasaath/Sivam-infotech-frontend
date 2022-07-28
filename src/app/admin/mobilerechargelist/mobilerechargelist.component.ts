import { Component, OnInit } from '@angular/core';
import { RegisService } from 'src/app/regis.service';

@Component({
  selector: 'app-mobilerechargelist',
  templateUrl: './mobilerechargelist.component.html',
  styleUrls: ['./mobilerechargelist.component.css']
})
export class MobilerechargelistComponent implements OnInit {

  Mobilerecharge: any = [];

  constructor(private apiService: RegisService) {
    this.readmobilerecharge();
  }
  ngOnInit() {}

  readmobilerecharge() {
    this.apiService.getmobile().subscribe((data) => {
      this.Mobilerecharge = data;
      console.log("Mobilerecharge data :"+this.Mobilerecharge);
    });
  }

  removemobilerecharge(mobile, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletemobile(mobile._id).subscribe((data) => {
        this.Mobilerecharge.splice(index, 1);
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { RegisService } from 'src/app/regis.service';

@Component({
  selector: 'app-fastaglist',
  templateUrl: './fastaglist.component.html',
  styleUrls: ['./fastaglist.component.css']
})
export class FastaglistComponent implements OnInit {


  Fastag: any = [];

  constructor(private apiService: RegisService) {
    this.readfastag();
  }
  ngOnInit(): void {
  }
  readfastag() {
    this.apiService.getfastag().subscribe((data) => {
      this.Fastag = data;
      console.log("Fastag data :"+this.Fastag);
    });
  }

  removefastag(fastag, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteaadhar(fastag._id).subscribe((data) => {
        this.Fastag.splice(index, 1);
      });
    
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { RegisService } from 'src/app/regis.service';

@Component({
  selector: 'app-panlist',
  templateUrl: './panlist.component.html',
  styleUrls: ['./panlist.component.css']
})
export class PanlistComponent implements OnInit {
  Pan: any = [];

  constructor(private apiService: RegisService) {
    this.readpan();
  }

  ngOnInit() {}

  readpan() {
    this.apiService.getpan().subscribe((data) => {
      this.Pan = data;
      console.log("Pan data :"+this.Pan);
    });
  }

  removepan(pan, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletepan(pan._id).subscribe((data) => {
        this.Pan.splice(index, 1);
      });
    }
  }
}

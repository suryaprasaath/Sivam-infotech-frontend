import { Component, OnInit } from '@angular/core';
import { RegisService } from 'src/app/regis.service';

@Component({
  selector: 'app-passportlist',
  templateUrl: './passportlist.component.html',
  styleUrls: ['./passportlist.component.css']
})
export class PassportlistComponent implements OnInit {

  Passport: any = [];

  constructor(private apiService: RegisService) {
    this.readpassport();
  }
  ngOnInit() {}

  readpassport() {
    this.apiService.getpassport().subscribe((data) => {
      this.Passport = data;
      console.log("Passport data :"+this.Passport);
    });
  }

  removepassport(pan, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deletepassport(pan._id).subscribe((data) => {
        this.Passport.splice(index, 1);
      });
    }
  }

}

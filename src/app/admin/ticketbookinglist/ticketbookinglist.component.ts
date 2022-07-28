import { Component, OnInit } from '@angular/core';
import { RegisService } from 'src/app/regis.service';

@Component({
  selector: 'app-ticketbookinglist',
  templateUrl: './ticketbookinglist.component.html',
  styleUrls: ['./ticketbookinglist.component.css']
})
export class TicketbookinglistComponent implements OnInit {

  Ticket: any = [];

  constructor(private apiService: RegisService) {
    this.readticket();
  }
  ngOnInit() {}

  readticket() {
    this.apiService.getticket().subscribe((data) => {
      this.Ticket = data;
      console.log("Ticket data :"+this.Ticket);
    });
  }

  removeticket(ticket, index) {
    if (window.confirm('Are you sure?')) {
      this.apiService.deleteticket(ticket._id).subscribe((data) => {
        this.Ticket.splice(index, 1);
      });
    }
  }

}

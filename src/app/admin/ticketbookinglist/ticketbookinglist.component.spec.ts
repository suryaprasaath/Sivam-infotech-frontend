import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookinglistComponent } from './ticketbookinglist.component';

describe('TicketbookinglistComponent', () => {
  let component: TicketbookinglistComponent;
  let fixture: ComponentFixture<TicketbookinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbookinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketbookinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

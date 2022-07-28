import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilerechargelistComponent } from './mobilerechargelist.component';

describe('MobilerechargelistComponent', () => {
  let component: MobilerechargelistComponent;
  let fixture: ComponentFixture<MobilerechargelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilerechargelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilerechargelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

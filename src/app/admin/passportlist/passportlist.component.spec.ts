import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportlistComponent } from './passportlist.component';

describe('PassportlistComponent', () => {
  let component: PassportlistComponent;
  let fixture: ComponentFixture<PassportlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassportlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

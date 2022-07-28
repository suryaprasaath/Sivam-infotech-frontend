import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadharlistComponent } from './aadharlist.component';

describe('AadharlistComponent', () => {
  let component: AadharlistComponent;
  let fixture: ComponentFixture<AadharlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AadharlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AadharlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

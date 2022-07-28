import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastaglistComponent } from './fastaglist.component';

describe('FastaglistComponent', () => {
  let component: FastaglistComponent;
  let fixture: ComponentFixture<FastaglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastaglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FastaglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { PanlistComponent } from './panlist.component';

describe('PanlistComponent', () => {
  let component: PanlistComponent;
  let fixture: ComponentFixture<PanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

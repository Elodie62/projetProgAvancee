import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSextoyComponent } from './add-sextoy.component';

describe('AddSextoyComponent', () => {
  let component: AddSextoyComponent;
  let fixture: ComponentFixture<AddSextoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSextoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSextoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

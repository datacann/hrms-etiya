import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersProfileComponent } from './employers-profile.component';

describe('EmployersProfileComponent', () => {
  let component: EmployersProfileComponent;
  let fixture: ComponentFixture<EmployersProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployersProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

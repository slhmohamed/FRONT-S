import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfreelancerComponent } from './registerfreelancer.component';

describe('RegisterfreelancerComponent', () => {
  let component: RegisterfreelancerComponent;
  let fixture: ComponentFixture<RegisterfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

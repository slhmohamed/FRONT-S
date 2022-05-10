import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilfreelancerComponent } from './profilfreelancer.component';

describe('ProfilfreelancerComponent', () => {
  let component: ProfilfreelancerComponent;
  let fixture: ComponentFixture<ProfilfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilfreelancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

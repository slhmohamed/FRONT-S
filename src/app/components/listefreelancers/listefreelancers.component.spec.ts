import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefreelancersComponent } from './listefreelancers.component';

describe('ListefreelancersComponent', () => {
  let component: ListefreelancersComponent;
  let fixture: ComponentFixture<ListefreelancersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListefreelancersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefreelancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

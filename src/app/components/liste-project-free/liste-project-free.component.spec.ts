import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProjectFreeComponent } from './liste-project-free.component';

describe('ListeProjectFreeComponent', () => {
  let component: ListeProjectFreeComponent;
  let fixture: ComponentFixture<ListeProjectFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProjectFreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProjectFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

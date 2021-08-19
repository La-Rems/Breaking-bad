import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathListComponent } from './death-list.component';

describe('DeathListComponent', () => {
  let component: DeathListComponent;
  let fixture: ComponentFixture<DeathListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

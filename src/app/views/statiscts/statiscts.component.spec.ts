import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisctsComponent } from './statiscts.component';

describe('StatisctsComponent', () => {
  let component: StatisctsComponent;
  let fixture: ComponentFixture<StatisctsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisctsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisctsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

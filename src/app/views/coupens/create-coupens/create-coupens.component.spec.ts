import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoupensComponent } from './create-coupens.component';

describe('CreateCoupensComponent', () => {
  let component: CreateCoupensComponent;
  let fixture: ComponentFixture<CreateCoupensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCoupensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCoupensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

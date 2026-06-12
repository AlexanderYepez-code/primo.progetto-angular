import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLigntComponent } from './traffic-lignt.component';

describe('TrafficLigntComponent', () => {
  let component: TrafficLigntComponent;
  let fixture: ComponentFixture<TrafficLigntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrafficLigntComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrafficLigntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

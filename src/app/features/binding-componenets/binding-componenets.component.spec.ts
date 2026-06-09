import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingComponenetsComponent } from './binding-componenets.component';

describe('BindingComponenetsComponent', () => {
  let component: BindingComponenetsComponent;
  let fixture: ComponentFixture<BindingComponenetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingComponenetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BindingComponenetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

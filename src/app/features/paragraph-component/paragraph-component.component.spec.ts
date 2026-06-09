import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphComponentComponent } from './paragraph-component.component';

describe('ParagraphComponentComponent', () => {
  let component: ParagraphComponentComponent;
  let fixture: ComponentFixture<ParagraphComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParagraphComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParagraphComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

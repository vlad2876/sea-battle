import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaAreaComponent } from './sea-area.component';

describe('SeaAreaComponent', () => {
  let component: SeaAreaComponent;
  let fixture: ComponentFixture<SeaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

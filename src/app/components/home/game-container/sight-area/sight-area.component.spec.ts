import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightAreaComponent } from './sight-area.component';

describe('SightAreaComponent', () => {
  let component: SightAreaComponent;
  let fixture: ComponentFixture<SightAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

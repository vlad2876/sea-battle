import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkylineAreaComponent } from './skyline-area.component';

describe('SkylineAreaComponent', () => {
  let component: SkylineAreaComponent;
  let fixture: ComponentFixture<SkylineAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkylineAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkylineAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

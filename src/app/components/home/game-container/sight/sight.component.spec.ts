import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightComponent } from './sight.component';

describe('AimComponent', () => {
  let component: SightComponent;
  let fixture: ComponentFixture<SightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

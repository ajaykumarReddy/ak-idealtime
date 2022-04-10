import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkIdealtimeComponent } from './ak-idealtime.component';

describe('AkIdealtimeComponent', () => {
  let component: AkIdealtimeComponent;
  let fixture: ComponentFixture<AkIdealtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkIdealtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkIdealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

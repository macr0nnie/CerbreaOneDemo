import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplekpiComponent } from './samplekpi.component';

describe('SamplekpiComponent', () => {
  let component: SamplekpiComponent;
  let fixture: ComponentFixture<SamplekpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SamplekpiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplekpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

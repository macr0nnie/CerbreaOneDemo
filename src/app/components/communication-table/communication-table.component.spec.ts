import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationTableComponent } from './communication-table.component';

describe('CommunicationTableComponent', () => {
  let component: CommunicationTableComponent;
  let fixture: ComponentFixture<CommunicationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunicationTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

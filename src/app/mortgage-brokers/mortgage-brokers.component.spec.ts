import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageBrokersComponent } from './mortgage-brokers.component';

describe('MortgageBrokersComponent', () => {
  let component: MortgageBrokersComponent;
  let fixture: ComponentFixture<MortgageBrokersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageBrokersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageBrokersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

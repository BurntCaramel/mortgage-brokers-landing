import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProfileRouteComponent } from './profile-route.component';

describe('ProfileRouteComponent', () => {
  let component: ProfileRouteComponent;
  let fixture: ComponentFixture<ProfileRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileRouteComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

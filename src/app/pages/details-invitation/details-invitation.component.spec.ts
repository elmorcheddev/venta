import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsInvitationComponent } from './details-invitation.component';

describe('DetailsInvitationComponent', () => {
  let component: DetailsInvitationComponent;
  let fixture: ComponentFixture<DetailsInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsInvitationComponent]
    });
    fixture = TestBed.createComponent(DetailsInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

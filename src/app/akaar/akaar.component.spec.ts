import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AkaarComponent } from './akaar.component';

describe('AkaarComponent', () => {
  let component: AkaarComponent;
  let fixture: ComponentFixture<AkaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AkaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AkaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

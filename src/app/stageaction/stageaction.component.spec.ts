import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageactionComponent } from './stageaction.component';

describe('StageactionComponent', () => {
  let component: StageactionComponent;
  let fixture: ComponentFixture<StageactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

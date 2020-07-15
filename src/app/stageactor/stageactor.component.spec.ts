import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageactorComponent } from './stageactor.component';

describe('StageactorComponent', () => {
  let component: StageactorComponent;
  let fixture: ComponentFixture<StageactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

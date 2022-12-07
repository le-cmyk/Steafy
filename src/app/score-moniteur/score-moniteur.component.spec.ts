import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreMoniteurComponent } from './score-moniteur.component';

describe('ScoreMoniteurComponent', () => {
  let component: ScoreMoniteurComponent;
  let fixture: ComponentFixture<ScoreMoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreMoniteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

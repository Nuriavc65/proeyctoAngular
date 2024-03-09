import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpienteEngineComponent } from './serpiente-engine.component';

describe('SerpienteEngineComponent', () => {
  let component: SerpienteEngineComponent;
  let fixture: ComponentFixture<SerpienteEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerpienteEngineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerpienteEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

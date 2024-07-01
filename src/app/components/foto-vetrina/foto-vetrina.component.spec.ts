import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoVetrinaComponent } from './foto-vetrina.component';

describe('FotoVetrinaComponent', () => {
  let component: FotoVetrinaComponent;
  let fixture: ComponentFixture<FotoVetrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FotoVetrinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoVetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

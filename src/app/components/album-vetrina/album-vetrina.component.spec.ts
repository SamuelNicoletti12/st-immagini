import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumVetrinaComponent } from './album-vetrina.component';

describe('AlbumVetrinaComponent', () => {
  let component: AlbumVetrinaComponent;
  let fixture: ComponentFixture<AlbumVetrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumVetrinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumVetrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

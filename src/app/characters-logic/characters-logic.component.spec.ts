import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersLogicComponent } from './characters-logic.component';

describe('CharactersLogicComponent', () => {
  let component: CharactersLogicComponent;
  let fixture: ComponentFixture<CharactersLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

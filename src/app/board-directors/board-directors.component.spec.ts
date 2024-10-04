import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDirectorsComponent } from './board-directors.component';

describe('BoardDirectorsComponent', () => {
  let component: BoardDirectorsComponent;
  let fixture: ComponentFixture<BoardDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardDirectorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

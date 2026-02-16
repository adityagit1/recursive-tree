import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrageDrop } from './drage-drop';

describe('DrageDrop', () => {
  let component: DrageDrop;
  let fixture: ComponentFixture<DrageDrop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrageDrop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrageDrop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

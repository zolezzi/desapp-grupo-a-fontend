import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClosedOperationsComponent } from './list-closed-operations.component';

describe('ListClosedOperationsComponent', () => {
  let component: ListClosedOperationsComponent;
  let fixture: ComponentFixture<ListClosedOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClosedOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClosedOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

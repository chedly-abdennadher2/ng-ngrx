import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxparentComponent } from './ngrxparent.component';

describe('NgrxparentComponent', () => {
  let component: NgrxparentComponent;
  let fixture: ComponentFixture<NgrxparentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxparentComponent]
    });
    fixture = TestBed.createComponent(NgrxparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

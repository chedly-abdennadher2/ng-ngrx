import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxchildComponent } from './ngrxchild.component';

describe('NgrxchildComponent', () => {
  let component: NgrxchildComponent;
  let fixture: ComponentFixture<NgrxchildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxchildComponent]
    });
    fixture = TestBed.createComponent(NgrxchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

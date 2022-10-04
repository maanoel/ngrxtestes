import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutroContadorComponent } from './outro-contador.component';

describe('OutroContadorComponent', () => {
  let component: OutroContadorComponent;
  let fixture: ComponentFixture<OutroContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutroContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutroContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

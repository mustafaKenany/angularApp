import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistercomponetComponent } from './registercomponet.component';

describe('RegistercomponetComponent', () => {
  let component: RegistercomponetComponent;
  let fixture: ComponentFixture<RegistercomponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistercomponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistercomponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPicturesComponent } from './header-pictures.component';

describe('HeaderPicturesComponent', () => {
  let component: HeaderPicturesComponent;
  let fixture: ComponentFixture<HeaderPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedImageComponent } from './searched-image.component';

describe('SearchedImageComponent', () => {
  let component: SearchedImageComponent;
  let fixture: ComponentFixture<SearchedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

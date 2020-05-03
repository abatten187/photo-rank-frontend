import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMatchUpComponent } from './page-match-up.component';

describe('PageMatchUpComponent', () => {
  let component: PageMatchUpComponent;
  let fixture: ComponentFixture<PageMatchUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMatchUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMatchUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

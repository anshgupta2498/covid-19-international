import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNavComponent } from './country-nav.component';

describe('CountryNavComponent', () => {
  let component: CountryNavComponent;
  let fixture: ComponentFixture<CountryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

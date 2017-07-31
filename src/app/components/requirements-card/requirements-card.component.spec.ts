import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RequirementsCardComponent } from './requirements-card.component';

describe('RequirementsCardComponent', () => {
  let component: RequirementsCardComponent;
  let fixture: ComponentFixture<RequirementsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequirementsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

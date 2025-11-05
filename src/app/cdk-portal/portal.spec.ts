import { ComponentFixture, TestBed } from '@angular/core/testing';
import Portal from './portal';

describe('Portal', () => {
  let component: Portal;
  let fixture: ComponentFixture<Portal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Portal],
    }).compileComponents();

    fixture = TestBed.createComponent(Portal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

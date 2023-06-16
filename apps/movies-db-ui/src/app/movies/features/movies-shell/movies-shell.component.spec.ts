import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesShellComponent } from './movies-shell.component';

describe('MoviesShellComponent', () => {
  let component: MoviesShellComponent;
  let fixture: ComponentFixture<MoviesShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

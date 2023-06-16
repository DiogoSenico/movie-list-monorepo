import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesRankingListComponent } from './movies-ranking-list.component';

describe('MoviesRankingListComponent', () => {
  let component: MoviesRankingListComponent;
  let fixture: ComponentFixture<MoviesRankingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesRankingListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesRankingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

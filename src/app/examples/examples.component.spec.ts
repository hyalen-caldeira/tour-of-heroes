import { TestBed } from '@angular/core/testing';
import { ExamplesComponent } from './examples.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExamplesComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ExamplesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tour-of-heroes'`, () => {
    const fixture = TestBed.createComponent(ExamplesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tour-of-heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ExamplesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('tour-of-heroes app is running!');
  });
});

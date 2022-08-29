import { TestBed } from '@angular/core/testing';
import { ExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let fixture : any;
  let app : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExamplesComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have a title 'Tour of Heroes'`, () => {
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Tour of Heroes');
  });
});

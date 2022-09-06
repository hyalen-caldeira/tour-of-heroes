import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let app: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                app = fixture.componentInstance;
            });
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

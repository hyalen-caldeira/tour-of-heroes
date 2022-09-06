import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpClient, HttpHeaders } from '@angular/common/http';

describe('HeroService', () => {
  let service: HeroService;
  let http: HttpClient;
  let controller: HttpTestingController;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(HeroService);
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ HeroService ],
      imports: [HttpClientTestingModule],
      declarations: [ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { XhrComponent } from './xhr.component';
import { FormsModule } from '@angular/forms';

describe('XhrComponent', () => {
  let component: XhrComponent;
  let fixture: ComponentFixture<XhrComponent>;
  let httpMock: HttpTestingController;
  let button, echo;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XhrComponent ],
      imports:[FormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XhrComponent);
    component = fixture.componentInstance;
    const injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    fixture.detectChanges();
  });

  // afterEach(() => {
    //   httpMock.verify();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should make xhr', ()=>{
    button = fixture.nativeElement.querySelector('button');
    echo = fixture.nativeElement.querySelector('span');
    button.click();
    const req = httpMock.expectOne('./assets/echo.json');
    const mockResp = {"data":"xhr"};
    req.flush(mockResp);
    fixture.detectChanges();
    expect(echo.textContent).toBe('xhr');
  })
});

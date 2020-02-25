import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DebouncedComponent } from './debounced/debounced.component';
import { XhrComponent } from './xhr/xhr.component';

describe('AppComponent', () => {
  let fixture;
  let input, echo;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, DebouncedComponent, XhrComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
      input  =  fixture.nativeElement.querySelector('input');
       echo = fixture.nativeElement.querySelector('span');
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('test delay', async()=>{
    const  text =  "ghoul";

    sendKeys(input, text);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(echo.textContent).toBe(text);
  })


  function sendKeys(element: Element, keys: string) {
    const e = element as HTMLInputElement;
    for (const key of keys) {
      const eventParams = {key, char: key, keyCode: key.charCodeAt(0)};
      e.dispatchEvent(new KeyboardEvent('keydown', eventParams));
      e.dispatchEvent(new KeyboardEvent('keypress', eventParams));
      e.value += key;
      e.dispatchEvent(new KeyboardEvent('keyup', eventParams));
      e.dispatchEvent(new Event('input'));
    }
}


});

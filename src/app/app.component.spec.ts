import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DebouncedComponent } from './debounced/debounced.component';

describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, DebouncedComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('test delay', async()=>{
    const  text =  "ghoul";
    const input  =  fixture.nativeElement.querySelector('input');
    const  echo = fixture.nativeElement.querySelector('span');
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

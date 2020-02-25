import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { DebouncedComponent } from './debounced.component';
import { FormsModule } from '@angular/forms';

describe('DebouncedComponent', () => {
  let component: DebouncedComponent;
  let fixture: ComponentFixture<DebouncedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouncedComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouncedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should echo the input value', fakeAsync(()=>{
     const input = fixture.nativeElement.querySelector('input');
     const echo = fixture.nativeElement.querySelector('span');
     sendKeys(input, 'hello ');
     tick(500);
     fixture.detectChanges();
     expect(echo.textContent).toBe('hello ');

     sendKeys(input, 'ghoul!!!');
     tick(500);
     fixture.detectChanges();
     expect(echo.textContent).toBe('hello ghoul!!!');
  }))


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

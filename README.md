# TipsTest

### Test with Delayed Example


```js
  it('test delay', async()=>{
    const  text =  "ghoul";
    const input  =  fixture.nativeElement.querySelector('input');
    const  echo = fixture.nativeElement.querySelector('span');
    sendKeys(input, text);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(echo.textContent).toBe(text);
  })

```



### Test with debounced Example (RXJS)

```js
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
  ```


### Test With Xhr with HttpTestingController

```js

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

  ```

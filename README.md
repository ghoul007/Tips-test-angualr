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

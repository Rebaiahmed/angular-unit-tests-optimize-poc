import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterAll(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-14-crud-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-14-crud-example');
  });

  it('should show message success and then hide it after 3 seconds', async(() => {
    component.showMessageSuccess();
    fixture.detectChanges();
    expect(component.messageSuccess).toBe(true);
    setTimeout(() => {
      fixture.detectChanges();
      expect(component.messageSuccess).toBe(false);
    }, 3000);
  }));

  it('should show message success and then hide it after 3 seconds', fakeAsync(() => {
    component.showMessageSuccess();
    tick(); // Move the clock forward by the time specified in setTimeout
    fixture.detectChanges();
    expect(component.messageSuccess).toBe(true);

    tick(3000); // Move the clock forward by 3000ms
    fixture.detectChanges();
    expect(component.messageSuccess).toBe(false);
  }));

});

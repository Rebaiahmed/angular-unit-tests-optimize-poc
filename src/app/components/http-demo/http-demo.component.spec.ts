import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemoComponent } from './http-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MockModule, ngMocks } from 'ng-mocks';

fdescribe('HttpDemoComponent', () => {
  let component: HttpDemoComponent;
  let fixture: ComponentFixture<HttpDemoComponent>;

  /*  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatTooltipModule,
        ],
      declarations: [ HttpDemoComponent ]

    })
    .compileComponents();
  })); */


    beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule,
        MockModule(MatGridListModule), MockModule(MatToolbarModule), MockModule(MatIconModule)
        ],
      declarations: [ HttpDemoComponent ]

    })
    .compileComponents();
  }));

  afterEach(() => {
    fixture.destroy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

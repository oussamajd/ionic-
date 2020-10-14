import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { XrpPage } from './xrp.page';

describe('XrpPage', () => {
  let component: XrpPage;
  let fixture: ComponentFixture<XrpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(XrpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

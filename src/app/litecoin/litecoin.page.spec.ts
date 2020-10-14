import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LitecoinPage } from './litecoin.page';

describe('LitecoinPage', () => {
  let component: LitecoinPage;
  let fixture: ComponentFixture<LitecoinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitecoinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LitecoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

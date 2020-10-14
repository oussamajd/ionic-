import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EthereumPage } from './ethereum.page';

describe('EthereumPage', () => {
  let component: EthereumPage;
  let fixture: ComponentFixture<EthereumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthereumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EthereumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

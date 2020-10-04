import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RutametroPage } from './rutametro.page';

describe('RutametroPage', () => {
  let component: RutametroPage;
  let fixture: ComponentFixture<RutametroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutametroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RutametroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

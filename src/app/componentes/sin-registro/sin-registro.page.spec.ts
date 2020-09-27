import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SinRegistroPage } from './sin-registro.page';

describe('SinRegistroPage', () => {
  let component: SinRegistroPage;
  let fixture: ComponentFixture<SinRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SinRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

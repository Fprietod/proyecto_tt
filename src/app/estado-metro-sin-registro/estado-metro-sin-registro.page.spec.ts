import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadoMetroSinRegistroPage } from './estado-metro-sin-registro.page';

describe('EstadoMetroSinRegistroPage', () => {
  let component: EstadoMetroSinRegistroPage;
  let fixture: ComponentFixture<EstadoMetroSinRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoMetroSinRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoMetroSinRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

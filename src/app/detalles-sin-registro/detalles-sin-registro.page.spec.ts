import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesSinRegistroPage } from './detalles-sin-registro.page';

describe('DetallesSinRegistroPage', () => {
  let component: DetallesSinRegistroPage;
  let fixture: ComponentFixture<DetallesSinRegistroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesSinRegistroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesSinRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

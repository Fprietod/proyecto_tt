import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstadoMetroPage } from './estado-metro.page';

describe('EstadoMetroPage', () => {
  let component: EstadoMetroPage;
  let fixture: ComponentFixture<EstadoMetroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoMetroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstadoMetroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

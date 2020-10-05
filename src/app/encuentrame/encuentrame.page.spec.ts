import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EncuentramePage } from './encuentrame.page';

describe('EncuentramePage', () => {
  let component: EncuentramePage;
  let fixture: ComponentFixture<EncuentramePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentramePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EncuentramePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatusChatPage } from './status-chat.page';

describe('StatusChatPage', () => {
  let component: StatusChatPage;
  let fixture: ComponentFixture<StatusChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatusChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

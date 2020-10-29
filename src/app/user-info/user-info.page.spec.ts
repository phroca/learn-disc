import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { userInfoPage } from './user-info.page';

describe('userInfoPage', () => {
  let component: userInfoPage;
  let fixture: ComponentFixture<userInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [userInfoPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(userInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

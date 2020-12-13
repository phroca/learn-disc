import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StabilitePagePage } from './stabilite-page.page';

describe('StabilitePagePage', () => {
  let component: StabilitePagePage;
  let fixture: ComponentFixture<StabilitePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StabilitePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StabilitePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

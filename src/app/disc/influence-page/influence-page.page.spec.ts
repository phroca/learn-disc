import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfluencePagePage } from './influence-page.page';

describe('InfluencePagePage', () => {
  let component: InfluencePagePage;
  let fixture: ComponentFixture<InfluencePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfluencePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfluencePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

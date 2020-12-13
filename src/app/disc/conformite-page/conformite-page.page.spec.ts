import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConformitePagePage } from './conformite-page.page';

describe('ConformitePagePage', () => {
  let component: ConformitePagePage;
  let fixture: ComponentFixture<ConformitePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformitePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConformitePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

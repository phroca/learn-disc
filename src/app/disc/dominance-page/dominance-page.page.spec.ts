import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DominancePagePage } from './dominance-page.page';

describe('DominancePagePage', () => {
  let component: DominancePagePage;
  let fixture: ComponentFixture<DominancePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DominancePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DominancePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

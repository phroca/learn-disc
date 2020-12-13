import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizContentPage } from './quiz-content.page';

describe('QuizContentPage', () => {
  let component: QuizContentPage;
  let fixture: ComponentFixture<QuizContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

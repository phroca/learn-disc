import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuizElementComponent } from './quiz-element.component';

describe('QuizElementComponent', () => {
  let component: QuizElementComponent;
  let fixture: ComponentFixture<QuizElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizElementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuizElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

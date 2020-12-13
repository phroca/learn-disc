import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemaDiscPage } from './schema-disc.page';

describe('SchemaDiscPage', () => {
  let component: SchemaDiscPage;
  let fixture: ComponentFixture<SchemaDiscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaDiscPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemaDiscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

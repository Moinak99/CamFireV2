import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchDatePage } from './search-date.page';

describe('SearchDatePage', () => {
  let component: SearchDatePage;
  let fixture: ComponentFixture<SearchDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescargaPage } from './descarga.page';

describe('DescargaPage', () => {
  let component: DescargaPage;
  let fixture: ComponentFixture<DescargaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaonlineinfoComponent } from './tiendaonlineinfo.component';

describe('TiendaonlineinfoComponent', () => {
  let component: TiendaonlineinfoComponent;
  let fixture: ComponentFixture<TiendaonlineinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaonlineinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaonlineinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialMasterPage } from './material-master.page';

describe('MaterialMasterPage', () => {
  let component: MaterialMasterPage;
  let fixture: ComponentFixture<MaterialMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryMasterPage } from './category-master.page';

describe('CategoryMasterPage', () => {
  let component: CategoryMasterPage;
  let fixture: ComponentFixture<CategoryMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

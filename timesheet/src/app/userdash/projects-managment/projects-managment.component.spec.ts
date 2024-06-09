import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsManagmentComponent } from './projects-managment.component';

describe('ProjectsManagmentComponent', () => {
  let component: ProjectsManagmentComponent;
  let fixture: ComponentFixture<ProjectsManagmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsManagmentComponent]
    });
    fixture = TestBed.createComponent(ProjectsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

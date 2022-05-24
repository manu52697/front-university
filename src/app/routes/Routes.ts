import { Routes } from "@angular/router";
import { CategoriesPageComponent } from "../pages/categories-page/categories-page.component";
import { CoursesPageComponent } from "../pages/courses-page/courses-page.component";
import { LoginPageComponent } from "../pages/login-page/login-page.component";
import { RegisterPageComponent } from "../pages/register-page/register-page.component";
import { StudentsPageComponent } from "../pages/students-page/students-page.component";


export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginPageComponent
    },
    {
      path: 'register',
      component: RegisterPageComponent
    },
    {
      path: 'students',
      component: StudentsPageComponent
    },
    {
      path: 'courses',
      component: CoursesPageComponent
    },
    {
      path: 'categories',
      component: CategoriesPageComponent
    }
  ];
  
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from 'src/app/types/MenuItem.type';
import { MenuIcons } from 'src/app/types/MenuIcons';
import { AppRoutes } from 'src/app/routes/AppRoutes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  menuList: MenuItem[] = [
  {
    text: "Students",
    icon: MenuIcons.STUDENTS,
    route: AppRoutes.STUDENTS
  },
  {
    text: "Course",
    icon: MenuIcons.COURSES,
    route: AppRoutes.COURSES
  },
  {
    text: "Categories",
    icon: MenuIcons.CATEGORIES,
    route: AppRoutes.CATEGORIES
  },
  {
    text: "Logout",
    icon: MenuIcons.LOGOUT,
    route: AppRoutes.LOGOUT
  }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

enum View {
  Home = 'isHome',
  AboutMe = 'isAboutMe',
  Projects = 'isProjects',
  Contact = 'isContact'
}

@Component({
  selector: 'app-root',
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio2.0';
  isShowMenu: boolean = false;
  view: View = View.Home;

  // Expón el enum View para usarlo en la plantilla
  View = View;

  handleGoToMenu(name: View) {
    this.view = name;
  }
}

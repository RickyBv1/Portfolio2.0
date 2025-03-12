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
  isDarkMode: boolean = false;

  View = View;

  handleGoToMenu(name: View) {
    this.view = name;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    console.log("modo oscuro: ", this.isDarkMode);
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }
}

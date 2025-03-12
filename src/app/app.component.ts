import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

interface ProjectLinks {
  [key: string]: string;
}

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

  constructor(public languageService: LanguageService) {}

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
    document.body.classList.toggle('dark-theme', this.isDarkMode);
  }

  toggleLanguage() {
    const newLang = this.languageService.getCurrentLanguage() === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(newLang);
  }

  getProjectLink(title: string): string {
    const projectLinks: ProjectLinks = {
      "Tic-Tac-Toe Online": "https://tic-tac-toe-online-ricky.netlify.app/",
      "E-Commerce": "https://github.com/RickyBv1/food-delivery",
      "Random Roulette": "https://github.com/RickyBv1/Random-roulette",
      "Pong game": "https://github.com/RickyBv1/Pong",
      "Log In form": "https://github.com/RickyBv1/LogIn",
      "Pokedex": "https://github.com/RickyBv1/Pokedex",
      "Typing test": "https://github.com/RickyBv1/Typing-test",
      "Calculator": "https://github.com/RickyBv1/Calculator",
      "Digital Clock": "https://github.com/RickyBv1/Digital-clock",
      "Portfolio V1.0": "https://github.com/RickyBv1/Portfolio",
    };
    return projectLinks[title] || "#";
  }

  getProjectsList(): { title: string; description: string; technologies: string; linkText: string }[] {
    const currentLanguage = this.languageService.getCurrentLanguage();
    return this.languageService.translations[currentLanguage]['projectsList'] as { title: string; description: string; technologies: string; linkText: string }[];
  }

  getProjectImagePath(title: string): string {
    return 'projects/' + title.toLowerCase().replace(/ /g, '-') + '.png';
  }
}

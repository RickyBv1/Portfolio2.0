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
  Contact = 'isContact',
}

@Component({
  selector: 'app-root',
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
    const newLang =
      this.languageService.getCurrentLanguage() === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(newLang);
  }

  getProjectLink(title: string): string {
    const projectLinks: ProjectLinks = {
      'Tic-Tac-Toe Online': 'https://tic-tac-toe-online-ricky.netlify.app/',
      'Tic-Tac-Toe React': 'https://rickytictactoereact.netlify.app/',
      'E-Commerce': 'https://github.com/RickyBv1/food-delivery',
      'Random Roulette': 'https://github.com/RickyBv1/Random-roulette',
      'Pong game': 'https://rickybv1.github.io/Pong/',
      'Log In form': 'https://github.com/RickyBv1/LogIn',
      Pokedex: 'https://github.com/RickyBv1/Pokedex',
      'Typing test': 'https://rickybv1.github.io/Typing-test/',
      Calculator: 'https://rickybv1.github.io/Calculator/',
      'Digital Clock': 'https://rickybv1.github.io/Digital-clock/',
      'Portfolio V1.0': 'https://github.com/RickyBv1/Portfolio',
    };
    return projectLinks[title] || '#';
  }

  getProjectsList(): {
    title: string;
    description: string;
    technologies: string;
    linkText: string;
  }[] {
    const currentLanguage = this.languageService.getCurrentLanguage();
    return this.languageService.translations[currentLanguage][
      'projectsList'
    ] as {
      title: string;
      description: string;
      technologies: string;
      linkText: string;
    }[];
  }

  getProjectImagePath(title: string): string {
    return 'projects/' + title.toLowerCase().replace(/ /g, '-') + '.png';
  }

  formatText(text: string): string {
    return text.replace(/\n/g, '<br>');
  }

  downloadCV() {
    const cvPath = 'cv/CV.pdf';
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Ricardo_Cortes_CV.pdf';
    link.target = '_blank';
    link.click();
  }
}

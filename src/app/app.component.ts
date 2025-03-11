import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  imports: [FlexLayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio2.0';

  isShowMenu:boolean = false;

  view = 'isHome';
  handleGoToMenu(name: any) {
    this.view = name;

  }
}

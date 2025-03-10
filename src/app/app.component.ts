import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlexLayoutModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio2.0';

  isShowMenu:boolean = true;

  isHome:boolean = false;
  isAboutMe:boolean = false;
  isProjects:boolean = false;
  isContact:boolean = false;

}

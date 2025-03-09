import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FlexLayoutModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio2.0';
}

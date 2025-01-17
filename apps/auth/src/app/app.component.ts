import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedComponentsComponent } from '@my-monorepo/shared-components';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedComponentsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'auth';
}

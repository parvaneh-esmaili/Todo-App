import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from "./modules/todo/pages/add/add.component";
import { HeaderComponent } from "./modules/components/header/header.component";
import { FooterComponent } from "./modules/components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoApp';
}

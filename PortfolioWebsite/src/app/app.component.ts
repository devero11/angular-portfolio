import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {

}

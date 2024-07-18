import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { OptionsListComponent } from "./options-list/options-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, CommonModule, OptionsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {

}

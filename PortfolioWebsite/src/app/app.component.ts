import { Component, NgModule ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommonModule } from '@angular/common';
import { OptionsListComponent } from "./options-list/options-list.component";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, CommonModule, OptionsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.fadeAnimation()
  }

  fadeAnimation(): void {
  }
}

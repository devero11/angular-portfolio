import { Component,OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-options-list',
  standalone: true,
  imports: [],
  templateUrl: './options-list.component.html',
  styleUrl: './options-list.component.css'
})
export class OptionsListComponent implements OnInit{
  ngOnInit(): void {
    this.fadeAnimation()
  }
  fadeAnimation(): void {


  }
}

import { Component, OnInit,AfterViewInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit,AfterViewInit {


  img = {x : 0, y:0}
  xOld = 0
  yOld =0
  coeficientX = 0
  coeficientY = 0

  winX=0
  winY=0

  ngOnInit(): void {
    this.winX=window.innerWidth
    this.winY=window.innerHeight
  }

  ngAfterViewInit(): void {

    this.fadeAnimation()
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.winX=window.innerWidth
    this.winY=window.innerHeight
    let x = event.clientX
    let y = event.clientY


    if(Math.abs(x-this.xOld) <100)
      this.coeficientX +=x-this.xOld
    this.img.x = (2 / (1 + Math.exp(-1* this.coeficientX/window.innerWidth)) - 1)*2;
    if(Math.abs(y-this.yOld) <100)
      this.coeficientY +=y-this.yOld
    this.img.y = (2 / (1 + Math.exp(-1* this.coeficientY/window.innerHeight)) - 1)*2;




    
    this.xOld = event.clientX
    this.yOld = event.clientY
  }

  fadeAnimation(): void {
    gsap.to(".amc",
      {
        scrollTrigger: {
          trigger: ".trigger",
          start:'top top',
          end:'bottom top',
          scrub: 1
        },
        opacity: '0',
        duration: 30
      }
    )
    gsap.to(".amc",
      {
        scrollTrigger: {
          trigger: ".amc",
          start:'0',
          end:'100%',
          scrub: 1
        },
        y: '-5%',
        duration: 30
      }
    )
  }

}

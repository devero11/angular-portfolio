import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {


  img = {x : 0, y:0}
  xOld = 0
  yOld =0
  coeficientX = 0
  coeficientY = 0
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

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
}

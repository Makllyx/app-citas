import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

// 👇 Importante: declarar bootstrap global
declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    // 👇 Seleccionamos el carrusel y lo inicializamos
    const myCarouselElement = document.querySelector('#carouselServicios');
    if (myCarouselElement) {
      new bootstrap.Carousel(myCarouselElement);
    }
  }
}



import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

resumenDownloadLink= '#';
githubLink= '#';
twiterLink= '#';
linkedInLink= '#';

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 56)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
      });
  });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
}
  }



import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // public irAAbout() {
  //   alert("ss");
  //    var target = $('[name=contacto]');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 56)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //     }

}

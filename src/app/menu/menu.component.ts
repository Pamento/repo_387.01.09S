import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToElement($element): void {
    console.log($element);
    // $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    const elmnt = document.getElementById($element);
    elmnt.scrollIntoView({behavior: 'smooth'});
  }
}

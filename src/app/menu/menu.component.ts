import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewChecked {

  fragment: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewChecked(){
    try {
      if(this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView();
      }
    } catch (e) { console.log(e); }
  }

  scrollToElement($element): void {
    console.log($element);
    // $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    const elmnt = document.getElementById($element);
    elmnt.scrollIntoView({behavior: 'smooth'});
  }
}

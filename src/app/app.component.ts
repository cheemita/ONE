import { Component } from '@angular/core';
import {  ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title?: string =  'first';

  constructor(private router: Router) {
  
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        const data = event.snapshot.data;
        const url = event.snapshot.url;
        const title = event.snapshot.routeConfig?.title

        this.title = title?.toString();

      }
    });
  }

  ngOnInit(): void {
    
  }
  
}

import { Component } from '@angular/core';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public myName: String;
  constructor() {
    this.myName = "Gaurav Raje";

  }
}

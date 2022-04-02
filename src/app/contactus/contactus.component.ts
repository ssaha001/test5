import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  message: String = 'Thank You!';
  name: String = 'John Doe';
  email: String = 'john.doe@email.com';

  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log(f);
  }
}

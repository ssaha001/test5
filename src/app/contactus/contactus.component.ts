import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  message: String = '';
  name: String = '';
  email: String = '';

  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: NgForm): void {
    console.log(f);
  }
}

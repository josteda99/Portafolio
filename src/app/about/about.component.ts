import { Component, OnInit } from '@angular/core';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  show: boolean = true;
  router: any;
  constructor() {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }

  showAnimation() {
    this.show = true;
    sleep(1000)
      .then(() => {
        this.router.navigate(['/projects']);
      })
      .then((response) => {
        console.log(response);
      });
  }

  // onSubmit(contactForm: NgForm) {
  // if (contactForm.valid) {
  //   const email = contactForm.value;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   this.http
  //     .post(
  //       'https://formspree.io/asdlf7asdf',
  //       { name: email.name, replyto: email.email, message: email.messages },
  //       { headers: headers }
  //     )
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }
  // }
}

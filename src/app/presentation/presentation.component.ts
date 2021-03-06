import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sleep } from 'sleep-ts';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  show: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

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
}

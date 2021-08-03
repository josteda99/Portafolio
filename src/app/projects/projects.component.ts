import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sleep } from 'sleep-ts';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  show: boolean = true;
  goToRoot: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.show = true;
    sleep(1000).then(() => {
      this.show = false;
    });
  }

  showAnimation(root: string): void {
    this.goToRoot = true;
    sleep(1000)
      .then(() => {
        if (root == 'oriun') this.router.navigate(['projects/oriun']);
        if (root == 'about') this.router.navigate(['projects/about']);
        if (root == 'memo') this.router.navigate(['projects/memophoto']);
        if (root == 'rass') this.router.navigate(['projects/rasskingball']);
      })
      .then((response) => {
        console.log(response);
      });
  }
}

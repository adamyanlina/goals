import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  ngOnInit() {

  }

  name: string;
  goal: number;
  percent: number;
  fullGoal: number = 11000;
  showCard: boolean = false;

  personGoal(name, goal) {
    this.showCard = !this.showCard;
    this.name = name;
    this.goal = goal;
    this.percent = (this.goal * 100) / this.fullGoal;
  }
  addPercent(percent) {
    this.percent = percent + 10;
    this.calcGoal();
  }
  calcGoal() {
    this.goal = this.percent * this.fullGoal / 100;
  }
}

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  name: string = 'Lina';
  goal: number = 0;
  percent: number = 0;
  fullGoal: number = 11000;
  textColor: string;

  ngOnInit() {

  }

  inputHandler(name, goal) {
    this.name = name;
    this.goal = goal;
    this.percent = (this.goal * 100) / this.fullGoal;
    console.log(this.percent);
  }

  show = {
    isCard: false,
    isForm: true
  };

  addPercent() {
    this.percent += 10;
    this.goal = this.fullGoal * this.percent / 100;
  }
}

import { Component, OnInit } from '@angular/core';
import {StageModel} from './StageModel';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {
  stages: Array<StageModel> = [];
  constructor() { }

  ngOnInit(): void {
  }

}

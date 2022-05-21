import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-finance',
  templateUrl: './card-finance.component.html',
  styleUrls: ['./card-finance.component.scss']
})
export class CardFinanceComponent implements OnInit {

  @Input() title: string = ''
  @Input() valor: string = ''
  @Input() tipo: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}

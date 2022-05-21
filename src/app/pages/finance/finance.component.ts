import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Finance } from 'src/app/types/Finance';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  blue: boolean = true

  alert: boolean = false

  valor_entrada: number = 0;
  valor_saida: number = 0;
  valor_total: number = 0;

  finance_list: Array<Finance> = []
  
  constructor() { }

  ngOnInit(): void {
  }

  handleAddClick(name: string,value: string,select:string){
    
    if(name.length <= 0 || value.length <= 0){
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 1000);
    }else{
      if(select == 'Entrada'){
       this.valor_entrada = this.valor_entrada + parseFloat(value)
     }
     
     else if(select == 'Saída'){
       this.valor_saida = this.valor_saida + parseFloat(value)
     }
      
     this.finance_list.push({name: name,valor:value,tipo:select,id: this.finance_list.length})
      
      this.valor_total = this.valor_entrada - this.valor_saida
      console.log(this.finance_list)
    }
  }

  removefinance(id: number, value: string, type: string){
    this.finance_list = this.finance_list.filter(item => item.id != id)

    if(type == 'Entrada'){
      this.valor_entrada = this.valor_entrada - parseFloat(value)
    }else if(type == 'Saída'){
      this.valor_saida = this.valor_saida - parseFloat(value)
    }

    this.valor_total = this.valor_entrada - this.valor_saida

  }

}

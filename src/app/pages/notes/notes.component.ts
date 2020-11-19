import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {/*
  https://angular.io/guidewha/lifecycle-hooks
  para saber mais sobre lifecycles
  */

  allCheckedCoffee = false;
  allCheckedJuice = false;
  allChecked = false;
  indeterminate = false;
  checkOptionsCoffee = [];
  checkOptionsJuice = [];
  checkOptionsTea = [];
  check: any;

  constructor(
    private notesService: NotesService,
    private router: Router,
  ) {
    this.notesService
      .getAllCoffess()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((val: any) => {
        console.log(val);// printa valor que se encontra no  banco
        for (const i in val.coffees) {
          this.checkOptionsCoffee.push(val.coffees[i]);
        };
        for (const i in val.juices) {
          this.checkOptionsJuice.push(val.juices[i]);
        };
        for (const i in val.teas) {
          this.checkOptionsTea.push(val.teas[i]);
        };
        this.coffees = this.checkOptionsCoffee;//atribuindo dados do banco
        this.juices = this.checkOptionsJuice;//atribuindo dados do banco
        this.teas = this.checkOptionsTea;//atribuindo dados do banco
        this.loading = false;
      });
  }

  updateAllChecked(objCheck): void {
    this.checkOptions(objCheck);//se pá vai dar erro aqui depois

    console.log(objCheck);
    this.indeterminate = false;

    if (this.allCheckedCoffee) {
      if (objCheck === 'coffees') {
        this.checkOptionsCoffee = this.check.map(item => {
          return { ...item, checked: true }
        })

      } else if (objCheck === 'juices') {
        this.checkOptionsJuice = this.check.map(item => {
          return { ...item, checked: true }
        })

      } else {
        this.checkOptionsTea = this.check.map(item => {
          return { ...item, checked: true }
        })

      }

    } else {
      if (objCheck === 'coffees') {
        this.checkOptionsCoffee = this.check.map(item => {
          return { ...item, checked: false }
        })

      } else if (objCheck === 'juices') {
        this.checkOptionsJuice = this.check.map(item => {
          return { ...item, checked: false }
        })

      } else {
        this.checkOptionsTea = this.check.map(item => {
          return { ...item, checked: false }
        })

      }
    }
  }

  updateSingleChecked(singleObjCheck): void {
    this.checkOptions(singleObjCheck);//se pá vai dar erro aqui depois

    console.log(this.check);
    if (this.check.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.check.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  checkOptions(check): void {
    if (check === "coffees") {
      this.check = this.checkOptionsCoffee;
    } else if (check === "juices") {
      this.check = this.checkOptionsJuice;
    } else if (check === "teas") {
      this.check = this.checkOptionsTea;
    }
  }



  private unsubscribe$ = new Subject(); //Não sei para que serve

  coffees: any[];// variavel criada para receber dados do banco
  juices: any[];// variavel criada para receber dados do banco
  teas: any[];// variavel criada para receber dados do banco
  loading = true; /*/ variável criada para verificar se os dados do banco foram 
  carregados, após os dados carregados se faz necessário uma mutação na mesma de 'true' para 'false'*/

  // checkbox1;
  // checkbox2;
  // checkbox3;
  // checkbox4;
  // checkbox5;
  // checkbox6;
  // juice1;
  // juice2;
  // juice3;
  // juice4;
  // juice5;
  // juice6;
  // tea1;
  // tea2;
  // tea3;
  // tea4;
  // tea5;
  // tea6;
  /* variável criada para que seja possível modificar os dados 
  dos dois lados, tanto no ts quanto no html, é necessário uma variável para cada checkbox
 */



  ngOnInit() {

  }

  ngOnDestroy() {
    this.unsubscribe$.next(1);
    this.unsubscribe$.complete();
  }
}



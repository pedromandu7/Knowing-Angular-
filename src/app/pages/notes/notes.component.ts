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
  allCheckedTea = false;
  indeterminate = false;
  indeterminate1 = false;
  indeterminate2 = false;
  singleObj: string;
  checkOptionsCoffee = [];//array with objects received of database
  checkOptionsJuice = [];// "
  checkOptionsTea = [];// "
  check: any;
  loading = true; /* variável criada para verificar se os dados do banco foram 
  carregados, após os dados carregados se faz necessário uma mutação na mesma de 'true' para 'false'*/

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
        // console.log(val);// printa valor que adivindo do  banco
        for (const i in val.coffees) {
          this.checkOptionsCoffee.push(val.coffees[i]); //recebendo valores do bando e atribuindo
        };
        for (const i in val.juices) {
          this.checkOptionsJuice.push(val.juices[i]);//recebendo valores do bando e atribuindo
        };
        for (const i in val.teas) {
          this.checkOptionsTea.push(val.teas[i]);//recebendo valores do bando e atribuindo
        };
        // this.coffees = this.checkOptionsCoffee;//atribuindo dados do banco
        // this.juices = this.checkOptionsJuice;//atribuindo dados do banco
        // this.teas = this.checkOptionsTea;//atribuindo dados do banco
        this.loading = false;
      });
  }

  updateAllChecked(objCheck: string): void {
    this.checkOptions(objCheck);//se pá vai dar erro aqui depois

    // console.log(objCheck);

    //coffee
    if (this.allCheckedCoffee) {
      this.indeterminate = false;

      if (objCheck === 'coffees') {
        this.checkOptionsCoffee = this.check.map(item => {
          return { ...item, checked: true }
        })

      }


    } else {
      if (objCheck === 'coffees') {
        this.indeterminate = false;

        this.checkOptionsCoffee = this.check.map(item => {
          return { ...item, checked: false }
        })

      }

    }

    //juice
    if (this.allCheckedJuice) {
      this.indeterminate1 = false;

      if (objCheck === 'juices') {
        this.checkOptionsJuice = this.check.map(item => {
          return { ...item, checked: true }
        })

      }


    } else {
      if (objCheck === 'juices') {
        this.indeterminate1 = false;

        this.checkOptionsJuice = this.check.map(item => {
          return { ...item, checked: false }
        })

      }

    }

    if (this.allCheckedTea) {
      this.indeterminate2 = false;

      if (objCheck === 'teas') {
        this.checkOptionsTea = this.check.map(item => {
          return { ...item, checked: true }
        })

      }


    } else {
      if (objCheck === 'teas') {
        this.indeterminate2 = false;

        this.checkOptionsTea = this.check.map(item => {
          return { ...item, checked: false }
        })

      }

    }


  }













  updateSingleChecked(singleObjCheck: string): void {
    this.checkOptions(singleObjCheck);//se pá vai dar erro aqui depois
    this.singleObj = singleObjCheck;
    // console.log(this.check);
    if (this.check.every(item => !item.checked)) {
      if (this.singleObj == "coffees") {
        this.allCheckedCoffee = false;
        this.indeterminate = false;
      } else if (this.singleObj == "juices") {
        this.allCheckedJuice = false;
        this.indeterminate1 = false;
      } else if (this.singleObj == "teas") {
        this.allCheckedTea = false;
        this.indeterminate2 = false;
      }

    } else if (this.check.every(item => item.checked)) {
      if (this.singleObj == "coffees") {
        this.allCheckedCoffee = true;
        this.indeterminate = false;
      } else if (this.singleObj == "juices") {
        this.allCheckedJuice = true;
        this.indeterminate1 = false;
      } else if (this.singleObj == "teas") {
        this.allCheckedTea = true;
        this.indeterminate2 = false;
      }
    } else {
      if (this.singleObj == "coffees") {
        this.allCheckedCoffee = false;

        this.indeterminate = true;
      } else if (this.singleObj == "juices") {
        this.allCheckedJuice = false;

        this.indeterminate1 = true;
      } else if (this.singleObj == "teas") {
        this.allCheckedTea = false;

        this.indeterminate2 = true;
      }
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



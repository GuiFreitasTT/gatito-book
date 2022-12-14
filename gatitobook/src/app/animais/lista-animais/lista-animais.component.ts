import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
animais$!: Animais;

  constructor(private activatedRoute: ActivatedRoute ){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.animais$ = this.activatedRoute.snapshot.data['animais'];
    });
  }
}

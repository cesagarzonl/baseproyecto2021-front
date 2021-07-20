import { Component, OnInit,Input } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  @Input() mensaje:any
  @Input() mostrar:any;
  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

}

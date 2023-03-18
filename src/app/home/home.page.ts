import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public precoAlcool: number | undefined;
  public precoGasolina: number | undefined;
  public percentualRelacao: number | undefined;
  public combustivelVantajoso: string = "";
  public resultadoVisible: boolean = false;

  constructor(private alertController: AlertController) {}

  calcular(){
    if(this.precoAlcool && this.precoGasolina){
      this.percentualRelacao = (this.precoAlcool/this.precoGasolina) * 100;
      if(this.percentualRelacao<70){
        this.combustivelVantajoso = "Álcool";
        this.resultadoVisible = true;
      } else if(this.percentualRelacao>=70){
        this.combustivelVantajoso = "Gasolina";
        this.resultadoVisible = true;
      }
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  hasil = 0;
  a=3;
  b=4;
  // item = {
  //   nama : "jeruk", harga : 15000, satuan : "kg"
  // }
  item = [
    {nama : "Jeruk", harga : 15000, satuan : "kg"},
    {nama : "Apel", harga : 5000, satuan : "kg"}
  ]

  tampil : boolean = false
  tulisanOPEN : String;

  OPEN(){
    this.tulisanOPEN ="TOKO DIBUKA";
    alert("DIBUKA");
  }

  values ="";
  onKey(event: any)
  {
    this.values += event.target.value + '|';
  }
}

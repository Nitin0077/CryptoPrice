import { Component, inject, OnInit } from '@angular/core';
import { Indian } from '../services/indian';
import {StockData} from './../models/newsModel'
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-news-data-componant',
  imports: [CommonModule, Navbar],
  templateUrl: './news-data-componant.html',
  styleUrl: './news-data-componant.css'
})
export class NewsDataComponant implements OnInit {
  stockList:StockData[] =[]

  
  newsService = inject(Indian);
 ngOnInit(){
  
  const endpoint="/BSE_most_active"
  this.newsService.getIndianIpo(endpoint).subscribe((res:StockData[])=>{
    this.stockList=res


  });

 }
}

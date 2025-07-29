import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { OverviewService } from '../services/overview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exchanges',
  imports: [Navbar,CommonModule],
  templateUrl: './exchanges.html',
  styleUrl: './exchanges.css'
})
export class Exchanges implements OnInit {
  exchangesList:any=[]
  exchanges = inject(OverviewService)
  ngOnInit() {
    const endpoint = 'exchanges/list'
    const payload = {

      currency: "USD",
      sort: "volume",
      order: "descending",
      offset: 0,
      limit: 50,
      meta: true
    }
    this.exchanges.getOverViewPage(endpoint,payload).subscribe((res: any) => {
      this.exchangesList=res
      console.log(this.exchangesList)
    })

  }
}

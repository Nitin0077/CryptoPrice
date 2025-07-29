  import { CommonModule } from '@angular/common';
  import { Component, inject } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { RouterLink } from '@angular/router';
  
  import { Indian } from '../services/indian';
  import { forkJoin, Subscription } from 'rxjs';
import { OverviewService } from '../services/overview';

  @Component({
    selector: 'app-navbar',
    imports: [RouterLink,CommonModule,FormsModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
  })
  export class Navbar {

  cryptoData:any;
  indiaData:any=[]
  showPopup=true;
  crytoSearch= inject(OverviewService);
  indiaSearch = inject(Indian)
  private subscriptions = new Subscription();
    searchText=""

    

    searchCoin(){
      
      const search =this.searchText.toUpperCase()
      if (!search) {
    this.showPopup = false;
    this.cryptoData = [];
    return;
  }
      const endpoint = "coins/map";
    const payload = {
      currency: 'USD',
      codes: [search],
      sort: 'rank',
      order: 'ascending',
      offset: 0,
      limit: 0,
      meta: true
    };
      const crypt$ =this.crytoSearch.getOverViewPage(endpoint,payload);
      const india$ = this.indiaSearch.getIndiaTrending();
      const combined$ =forkJoin([crypt$,india$]);
      
    this.subscriptions.add(
      combined$.subscribe({
        next:(result)=>{
          const cryptoRes = result[0];
          const indiaRes =result[1]
          this.cryptoData=cryptoRes;
          this.indiaData=indiaRes;
        }
      })
    )

   

    }
    

  }

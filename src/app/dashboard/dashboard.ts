import { Component, inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { CryptoService } from '../services/crypto';
import { OverviewService } from '../services/overview';
import { forkJoin,Subscription  } from 'rxjs';
import { Indian } from '../services/indian';
import {IndianIpoResponse, IndiaTrendingResponse, UpcomingIpo } from '../models/india.trending'
import { RouterModule } from '@angular/router';
RouterModule
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, Navbar,RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnDestroy {
  dataSource: any[] = [];
  overViewData: any = {};

  indiaIpo: IndianIpoResponse = { upcoming: [] };
  indiaTrending: IndiaTrendingResponse = {
    trending_stocks: {
      top_gainers: []
    }
  };

 

  private cryptoService = inject(CryptoService);
  private overViewService = inject(OverviewService);
  private indiaService = inject(Indian);

  private intervalId: any;
  private subscriptions = new Subscription();

  constructor() {
    this.fetchStaticIndianData(); // Call once on page load
    this.fetchLiveCryptoData();   // Set interval for live data

    this.intervalId = setInterval(() => {
      this.fetchLiveCryptoData();
    }, 15000); // every 15 seconds
  }

  // 🔁 Refreshes every 15s
  fetchLiveCryptoData() {
    const endpoint:string='overview';
    const payload:any={
      currency:"USD"
    }
    const crypto$ = this.cryptoService.getCryptoList();
    const overview$ = this.overViewService.getOvewView(endpoint,payload);

    const combined$ = forkJoin([crypto$, overview$]);

    this.subscriptions.add(
      combined$.subscribe({
        next: ([cryptoData, overviewData]) => {
          this.dataSource = cryptoData?.data || cryptoData;
          this.overViewData = overviewData?.data || overviewData;
        },
        error: (err) => {
          console.error('Live data API error:', err);
        }
      })
    );
  }

  // ✅ Called only once on page load
  fetchStaticIndianData() {
    const endpoint="/ipo"
    const indianipo$ = this.indiaService.getIndianIpo(endpoint);
    const indiantrending$ = this.indiaService.getIndiaTrending();

    forkJoin([indianipo$, indiantrending$]).subscribe({
      next: ([ipoData, trendingData]) => {
        this.indiaIpo = ipoData?.data || ipoData;
        this.indiaTrending = trendingData?.data || trendingData;
      },
      error: (err) => {
        console.error('Static India API error:', err);
      }
    });
  }

  getColor(change: number): string {
    if (!change) return 'gray';
    const diff = change - 1;
    return diff > 0 ? 'green' : diff < 0 ? 'red' : 'gray';
  }

  getPercentChange(value: number): number {
    return value - 1;
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.subscriptions.unsubscribe();
  }
}

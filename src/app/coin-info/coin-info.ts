import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverviewService } from '../services/overview';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-coin-info',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './coin-info.html',
  styleUrls: ['./coin-info.css']
})
export class CoinInfo implements OnInit {
  coinInfo: any = {};
  code: string = '';

  constructor(private route: ActivatedRoute) {}
  coinDetails = inject(OverviewService);

  ngOnInit() {
    this.code = this.route.snapshot.paramMap.get('code') || '';
    this.fetchCoin();

   // Optional: refresh data every 15 seconds
    setInterval(() => this.fetchCoin(), 15000);
  }

  fetchCoin() {
    const endpoint = 'coins/single';
    const payload = {
      currency: 'USD',
      code: this.code,
      meta: true
    };

    this.coinDetails.getOverViewPage(endpoint, payload).subscribe({
      next: (res) => (this.coinInfo = res),
      error: (err) => console.error('API Error:', err)
    });
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj).filter(k => obj[k]) : [];
  }
}

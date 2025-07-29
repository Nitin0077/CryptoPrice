import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { OverviewService } from '../services/overview';
import { CommonModule } from '@angular/common';
import { Navbar } from "../navbar/navbar";
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,  // ✅ Required for standalone component
  selector: 'app-overview',
  imports: [CommonModule, Navbar, FormsModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class Overview implements OnInit {
  viewData: any;
  

  private overViewData = inject(OverviewService);
  private http = inject(HttpClient);

  ngOnInit() {
   
    const endpoint = "coins/map";
    const payload = {
      currency: 'USD',
      codes: ['ETH', 'BNB', 'BTC', 'SOL'],
      sort: 'rank',
      order: 'ascending',
      offset: 0,
      limit: 0,
      meta: true
    };

    this.overViewData.getOverViewPage(endpoint, payload).subscribe((res: any) => {
      this.viewData = res;
    });
  }
}

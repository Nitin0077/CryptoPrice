import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngIf, *ngFor
import { Indian } from '../services/indian';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-mutual-fund',
  standalone: true,
  imports: [CommonModule, Navbar], // important if using standalone component
  templateUrl: './mutual-fund.html',
  styleUrls: ['./mutual-fund.css'] // typo fixed: `styleUrl` → `styleUrls`
})
export class MutualFund implements OnInit {
  mutual: any = {}; // Store full JSON response

  indMutual = inject(Indian);

  ngOnInit(): void {
    const endpoint = "/mutual_funds";

    this.indMutual.getIndianIpo(endpoint).subscribe((res: any) => {
      this.mutual = res;
    });
  }

  getKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}

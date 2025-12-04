import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExchangeStateService } from '../../services/exchange-state.service';

@Component({
  selector: 'app-network-status',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './network-status.component.html',
  styleUrl: './network-status.component.css'
})
export class NetworkStatusComponent {
  constructor(public exchangeState: ExchangeStateService) {}
  
  get totalClicks() {
    return this.exchangeState.getTotalClicks();
  }
  
  get globalVolume() {
    return this.exchangeState.globalVolume;
  }
  
  get networkLatency() {
    return this.exchangeState.networkLatency;
  }
}


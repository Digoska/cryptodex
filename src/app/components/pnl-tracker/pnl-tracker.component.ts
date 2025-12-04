import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExchangeStateService } from '../../services/exchange-state.service';

@Component({
  selector: 'app-pnl-tracker',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './pnl-tracker.component.html',
  styleUrl: './pnl-tracker.component.css'
})
export class PnLTrackerComponent {
  private clicksA = signal<number>(0);
  private clicksB = signal<number>(0);
  
  constructor(private exchangeState: ExchangeStateService) {}
  
  result = computed(() => this.clicksA() - this.clicksB());
  
  resultColor = computed(() => {
    const value = this.result();
    return value >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]';
  });
  
  resultGlow = computed(() => {
    const value = this.result();
    return value >= 0 ? 'neon-green' : 'neon-red';
  });
  
  onTakeProfitClick(): void {
    this.clicksA.update(count => count + 1);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  onStopLossClick(): void {
    this.clicksB.update(count => count + 1);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  private updateServiceResult(): void {
    this.exchangeState.updateComponentResult('pnl-tracker', this.result());
  }
}


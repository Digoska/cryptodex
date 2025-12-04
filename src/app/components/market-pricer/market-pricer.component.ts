import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExchangeStateService } from '../../services/exchange-state.service';

@Component({
  selector: 'app-market-pricer',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './market-pricer.component.html',
  styleUrl: './market-pricer.component.css'
})
export class MarketPricerComponent {
  clicksA = signal<number>(0);
  clicksB = signal<number>(0);
  
  constructor(private exchangeState: ExchangeStateService) {}
  
  result = computed(() => {
    const denominator = this.clicksB();
    return denominator === 0 ? 0 : this.clicksA() / denominator;
  });
  
  onTotalCostClick(): void {
    this.clicksA.update(count => count + 1);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  onCoinAmountClick(): void {
    this.clicksB.update(count => count + 1);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  private updateServiceResult(): void {
    this.exchangeState.updateComponentResult('market-pricer', this.result());
  }
}


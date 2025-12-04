import { Component, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExchangeStateService } from '../../services/exchange-state.service';

@Component({
  selector: 'app-wallet-manager',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './wallet-manager.component.html',
  styleUrl: './wallet-manager.component.css'
})
export class WalletManagerComponent {
  private clicksA = signal<number>(0);
  private clicksB = signal<number>(0);
  
  constructor(private exchangeState: ExchangeStateService) {}
  
  get result(): number {
    return this.clicksA() + this.clicksB();
  }
  
  onDepositClick(): void {
    this.clicksA.update(count => count + 1);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  onAirdropClick(): void {
    this.clicksB.update(count => count + 1);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  private updateServiceResult(): void {
    this.exchangeState.updateComponentResult('wallet-manager', this.result);
  }
}


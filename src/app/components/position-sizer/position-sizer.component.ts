import { Component, signal, computed } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ExchangeStateService } from '../../services/exchange-state.service';

@Component({
  selector: 'app-position-sizer',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './position-sizer.component.html',
  styleUrl: './position-sizer.component.css'
})
export class PositionSizerComponent {
  margin = signal<number>(0);
  leverage = signal<number>(1);
  
  constructor(private exchangeState: ExchangeStateService) {}
  
  result = computed(() => this.margin() * this.leverage());
  
  leverageDisplay = computed(() => `${this.leverage()}x`);
  
  onAddMarginClick(): void {
    this.margin.update(value => value + 10);
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  onIncreaseLeverageClick(): void {
    this.leverage.update(current => {
      const next = current + 1;
      return next > 5 ? 1 : next;
    });
    this.exchangeState.incrementClickCount();
    this.updateServiceResult();
  }
  
  private updateServiceResult(): void {
    this.exchangeState.updateComponentResult('position-sizer', this.result());
  }
}


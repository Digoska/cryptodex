import { Injectable, signal, computed } from '@angular/core';

export interface ComponentResult {
  componentId: string;
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class ExchangeStateService {
  private totalClicks = signal<number>(0);
  private componentResults = signal<Map<string, number>>(new Map());
  private lastClickTime = signal<number | null>(null);
  private lastLatency = signal<number>(0);
  
  readonly globalVolume = computed(() => {
    let sum = 0;
    this.componentResults().forEach((value) => {
      sum += value;
    });
    return sum;
  });
  
  readonly networkLatency = computed(() => {
    return this.lastLatency();
  });
  
  getTotalClicks() {
    return this.totalClicks.asReadonly();
  }
  
  incrementClickCount(): void {
    this.totalClicks.update(count => count + 1);
    this.handleTimer();
  }
  
  updateComponentResult(componentId: string, value: number): void {
    const currentResults = new Map(this.componentResults());
    currentResults.set(componentId, value);
    this.componentResults.set(currentResults);
  }
  
  private handleTimer(): void {
    const lastTime = this.lastClickTime();
    const now = Date.now();
    
    if (lastTime === null) {
      this.lastClickTime.set(now);
      this.lastLatency.set(0);
    } else {
      const latency = now - lastTime;
      this.lastLatency.set(latency);
      this.lastClickTime.set(now);
    }
  }
}


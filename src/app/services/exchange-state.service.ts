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
  private clickTimestamps = signal<number[]>([]);
  
  readonly globalVolume = computed(() => {
    let sum = 0;
    this.componentResults().forEach((value) => {
      sum += value;
    });
    return sum;
  });
  
  readonly networkLatency = computed(() => {
    const timestamps = this.clickTimestamps();
    if (timestamps.length < 2) {
      return 0;
    }
    
    let totalDiff = 0;
    for (let i = 1; i < timestamps.length; i++) {
      totalDiff += timestamps[i] - timestamps[i - 1];
    }
    
    return Math.round(totalDiff / (timestamps.length - 1));
  });
  
  getTotalClicks() {
    return this.totalClicks.asReadonly();
  }
  
  incrementClickCount(): void {
    this.totalClicks.update(count => count + 1);
    this.recordClickTimestamp();
  }
  
  updateComponentResult(componentId: string, value: number): void {
    const currentResults = new Map(this.componentResults());
    currentResults.set(componentId, value);
    this.componentResults.set(currentResults);
  }
  
  private recordClickTimestamp(): void {
    const now = Date.now();
    this.clickTimestamps.update(timestamps => {
      const updated = [...timestamps, now];
      return updated.slice(-100);
    });
  }
}


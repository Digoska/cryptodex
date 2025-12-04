import { Component } from '@angular/core';
import { WalletManagerComponent } from './components/wallet-manager/wallet-manager.component';
import { PnLTrackerComponent } from './components/pnl-tracker/pnl-tracker.component';
import { PositionSizerComponent } from './components/position-sizer/position-sizer.component';
import { MarketPricerComponent } from './components/market-pricer/market-pricer.component';
import { NetworkStatusComponent } from './components/network-status/network-status.component';

@Component({
  selector: 'app-root',
  imports: [
    WalletManagerComponent,
    PnLTrackerComponent,
    PositionSizerComponent,
    MarketPricerComponent,
    NetworkStatusComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'FutureTrade DEX';
}

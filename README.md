# FutureTrade DEX

Professional crypto futures trading platform simulator built with Angular.

## Features

- **Assets Management** - Deposit and airdrop tracking
- **Realized PnL** - Profit and loss calculations
- **Leverage Adjustment** - Position sizing with margin and leverage
- **Average Entry Calculator** - Price calculation tools
- **Network Status** - Real-time trading statistics

## Tech Stack

- Angular 21
- TypeScript
- TailwindCSS v4
- Signals for reactive state management

## Development

```bash
npm install
npm start
```

Navigate to `http://localhost:4200/`

## Build

```bash
npm run build
```

## Project Structure

```
src/app/
├── components/
│   ├── wallet-manager/
│   ├── pnl-tracker/
│   ├── position-sizer/
│   ├── market-pricer/
│   └── network-status/
├── services/
│   └── exchange-state.service.ts
└── app.component.ts
```

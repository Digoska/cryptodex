# FutureTrade DEX

Professional crypto futures trading platform simulator built with Angular.

**Projekt na Skriptovacie Jazyky**  
Autor: Digo-Nikodem Zelenak

Jednoduchý simulátor crypto marketu s basic komponentami.

## Inštalácia

```bash
npm install
```

## Spustenie

```bash
npm start
```

Otvorte `http://localhost:4200/`

## Build

```bash
npm run build
```

## Štruktúra projektu

```
src/app/
├── components/
│   ├── wallet-manager/      (Sčítač)
│   ├── pnl-tracker/         (Odčítač)
│   ├── position-sizer/      (Násobič)
│   ├── market-pricer/       (Delič)
│   └── network-status/      (Info)
├── services/
│   └── exchange-state.service.ts
└── app.component.ts
```

import { NextResponse } from "next/server";

function jitter(base: number, pct = 0.004) {
  const move = 1 + (Math.random() * pct * 2 - pct);
  return base * move;
}

function formatPrice(symbol: string, value: number) {
  if (symbol.includes("USD") && value > 1000) return `$${value.toFixed(0)}`;
  if (symbol === "XAU/USD") return `$${value.toFixed(0)}`;
  if (symbol.includes("EUR/USD") || symbol.includes("GBP/USD")) return value.toFixed(4);
  if (symbol === "DXY") return value.toFixed(2);
  return `$${value.toFixed(2)}`;
}

function formatChange() {
  const value = (Math.random() * 4 - 2).toFixed(2);
  return `${Number(value) >= 0 ? "+" : ""}${value}%`;
}

function pickSentiment(change: string) {
  const num = parseFloat(change);
  if (num > 0.8) return "Bullish";
  if (num < -0.8) return "Bearish";
  if (num > 0.2) return "Risk-On";
  if (num < -0.2) return "Risk-Off";
  return "Mixed";
}

export async function GET() {
  const base = [
    { symbol: "BTC/USD", value: 84240 },
    { symbol: "ETH/USD", value: 1985 },
    { symbol: "XAU/USD", value: 3341 },
    { symbol: "EUR/USD", value: 1.0842 },
    { symbol: "NASDAQ", value: 18442 },
    { symbol: "DXY", value: 104.18 },
  ];

  const markets = base.map((item) => {
    const priceValue = jitter(item.value);
    const change = formatChange();
    const sentiment = pickSentiment(change);

    return {
      symbol: item.symbol,
      price: formatPrice(item.symbol, priceValue),
      change,
      confidence: Math.floor(58 + Math.random() * 35),
      sentiment,
    };
  });

  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    markets,
  });
}

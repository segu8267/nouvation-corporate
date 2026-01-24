export interface MarketPriceData {
  date: string;
  item: string;
  market: string;
  price: number;
  unit: string;
}

export async function getMarketPrices(): Promise<MarketPriceData[]> {
  const GAS_URL = "https://script.google.com/macros/s/AKfycbx7ESPQ9ohWe0e0fYARWrqtZwRhHl2pa0Euo8YuSGHMqX3A3k4hbUuZX8Ft3dIS579e/exec?type=market";
  
  try {
    const response = await fetch(GAS_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    
    // GAS側で返却されるデータ構造に合わせて取得
    // 配列ならそのまま、そうでなければ .data または .contents などを参照
    if (Array.isArray(data)) return data;
    if (data && data.data && Array.isArray(data.data)) return data.data;
    if (data && data.contents && Array.isArray(data.contents)) return data.contents;
    
    return [];
  } catch (error) {
    console.error("Failed to fetch market prices:", error);
    return [];
  }
}

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
    // サーバーサイドでのフェッチ（リダイレクトを自動追従）
    const response = await fetch(GAS_URL, { redirect: 'follow' });
    if (!response.ok) throw new Error('Network response was not ok');
    
    const rawData = await response.json();
    
    // rowsキーの中身を取得
    const rawPrices = Array.isArray(rawData) ? rawData : (rawData.rows || rawData.data || rawData.contents || []);
    
    // データの正規化
    return rawPrices.map((d: any) => ({
      date: d.date || d.日付 || "",
      item: d.item || d.品目 || "",
      market: d.market || d.市場 || "",
      price: Number(d.price || d.価格 || 0),
      unit: d.unit || d.単位 || "円/kg"
    })).filter((d: any) => d.date && d.item);
    
  } catch (error) {
    console.error("Failed to fetch market prices at build time:", error);
    return [];
  }
}

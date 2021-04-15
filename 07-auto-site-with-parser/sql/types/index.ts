export interface DBId {
  id: number;
}
export interface DBTimestamp {
  created_at: string;
}

export interface CarItem extends DBId, DBTimestamp {
  title: string;
  price: number;
  probeg?: number;
  autoru_id: number;
}

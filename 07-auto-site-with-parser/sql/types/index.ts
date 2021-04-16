export interface DBId {
  id: number;
}
export interface DBTimestamp {
  created_at: string;
}

export interface CarItem extends DBId, DBTimestamp {
  title: string;
  price: number;
  images: string[] | string;
  autoru_id: number;
}



export interface IBookScore {
  id?: number;
  book_id?: number; // FK
  total_weight?: number;
  total_value?: number;
  final_score?: number;
}

export interface IScoreCategory {
  id?: number;
  book_score_id?: number; // FK
  label?: string;
  created_at?: Date;
  description?: string;
  weight?: number;
  value?: number;
}

export interface ChatMessage {
  id: number;
  message: string;
  istMine: boolean;
  image?: string;
}

export interface CreateTweetDto {
  content: string;
  type: string;
  userId: string;
}

export interface UpdateTweetDto {
  userId: string;
  id: string;
  content?: string;
  type?: string;
}

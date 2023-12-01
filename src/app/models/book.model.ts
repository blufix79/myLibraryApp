import { DateTime } from 'luxon';
export interface Book {
  id: number,
  title: string,
  author: string,
  ISBN: string,
  dateAdd: DateTime,
  dateRem: DateTime,
  plot: string,
  readingsNumber?: number,
  userId: number,
  createdAt: DateTime,
  updatedAt: DateTime
}

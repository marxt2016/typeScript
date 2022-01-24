export function cloneDate(date: Date): Date;
export function addDays(date: Date, days: number): Date;

export interface Hotel {
  id: string;
  title?: string;
  details?: string;
  photos?: string[];
  coordinates?: number[];
  bookedDates: Date[];
  price: number;
}

export interface SearchParameters {
  city?: string;
  checkInDate: Date;
  checkOutDate: Date;
  price?: number;
}

export class FlatRentSdk {
  get(id: string): Promise<Object | null>;
  search(parameters: SearchParameters): object[];

  book(id: string, checkInDate: Date, checkOutDate: Date): number;
}

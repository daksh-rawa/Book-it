export interface Experience {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  location: string;
}

export interface Slot {
  _id: string;
  date: string;
  totalSeats: number;
  availableSeats: number;
}

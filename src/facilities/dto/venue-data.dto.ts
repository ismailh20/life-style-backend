import { Event } from 'src/events/events/event.model';

// src/facilities/dto/venue-data.dto.ts
interface Facility {
  id: number;
  name: string;
  description: string;
  category: string;
}
export class VenueDataDto {
  event: Event;
  facilities?: Facility[];
  parking?: string | null;
  food_court?: string | null;
}

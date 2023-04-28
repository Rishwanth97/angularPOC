export interface IEvent {
  id: number;
  name: string;
  location?: ILocation;
  sessions?: ISession[];
}

interface ILocation {
  address: string;
  city: string;
  country: string;
}

interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
}

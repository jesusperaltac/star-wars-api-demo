export interface PeopleResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: People[];
  }

export interface People {
    id: string;
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    gender: string;
    url: string;
}


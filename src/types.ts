export interface StateData {
  id: string;
  name: string;
  capital: string;
  language: {
    language: string;
    phrase: string;
    meaning: string;
  };
  dish: {
    name: string;
    description: string;
  };
  famousFor: string;
  culturalEssence: string;
  stereotype: {
    myth: string;
    reality: string;
  };
  dayInLife: {
    urban: string;
    rural: string;
  };
  festivals: {
    spring: string;
    summer: string;
    monsoon: string;
    winter: string;
  };
  touristPlaces: Array<{
    id: string;
    name: string;
    description: string;
    category: string;
    bestTimeToVisit: string;
  }>;
  color: string;
}
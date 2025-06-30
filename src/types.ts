export interface TouristPlace {
  name: string;
  id: string;
  description: string;
  history: string;
  bestTimeToVisit: string;
  howToReach: string;
  nearbyAttractions: string[];
  specialFeatures: string[];
  entryFee?: string;
  timings?: string;
  images: string[];
  category: 'heritage' | 'nature' | 'religious' | 'modern' | 'adventure' | 'cultural';
}

export interface StateData {
  name: string;
  id: string;
  capital: string;
  famousFor: string;
  culturalEssence: string;
  dish: {
    name: string;
    description: string;
  };
  language: {
    phrase: string;
    meaning: string;
    language: string;
  };
  stereotype: {
    myth: string;
    reality: string;
  };
  festivals: {
    spring: string;
    summer: string;
    monsoon: string;
    winter: string;
  };
  dayInLife: {
    urban: string;
    rural: string;
  };
  touristPlaces: TouristPlace[];
  color: string;
}
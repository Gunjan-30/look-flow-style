import themeParty from "@/assets/theme-party.jpg";
import themeBeach from "@/assets/theme-beach.jpg";
import themeSleepwear from "@/assets/theme-sleepwear.jpg";
import themeTravel from "@/assets/theme-travel.jpg";
import themePlaytime from "@/assets/theme-playtime.jpg";
import lookPastel from "@/assets/look-pastel-party.jpg";
import lookFestive from "@/assets/look-festive-bright.jpg";
import lookEvening from "@/assets/look-evening-dressy.jpg";
import lookCoord from "@/assets/look-coord-party.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sizes: string[];
}

export interface Look {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  product: Product;
}

export interface Theme {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  looks: Look[];
}

export const themes: Theme[] = [
  {
    id: "party-wear",
    title: "Party Wear",
    subtitle: "Dress up, stand out, celebrate",
    image: themeParty,
    looks: [
      {
        id: "pastel-party",
        title: "Pastel Dreams",
        subtitle: "Soft, romantic, celebration-ready",
        image: lookPastel,
        product: {
          id: "p1",
          name: "Lavender Tutu Dress",
          price: "₹2,299",
          image: lookPastel,
          sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
        },
      },
      {
        id: "festive-bright",
        title: "Festive Glow",
        subtitle: "Bold, bright, unapologetically fun",
        image: lookFestive,
        product: {
          id: "p4",
          name: "Sequin Party Romper",
          price: "₹1,999",
          image: lookFestive,
          sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
        },
      },
      {
        id: "evening-dressy",
        title: "Evening Elegance",
        subtitle: "Timeless, refined, unforgettable",
        image: lookEvening,
        product: {
          id: "p7",
          name: "Velvet Bow Dress",
          price: "₹2,799",
          image: lookEvening,
          sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y", "3-4Y"],
        },
      },
      {
        id: "coord-party",
        title: "Sunset Co-ord",
        subtitle: "Comfortable, playful, celebration-friendly",
        image: lookCoord,
        product: {
          id: "p10",
          name: "Cotton Co-ord Set",
          price: "₹1,599",
          image: lookCoord,
          sizes: ["0-6M", "6-12M", "1-2Y", "2-3Y"],
        },
      },
    ],
  },
  {
    id: "beach-looks",
    title: "Beach Looks",
    subtitle: "Sun-kissed, breezy, effortless",
    image: themeBeach,
    looks: [],
  },
  {
    id: "sleepwear",
    title: "Sleepwear",
    subtitle: "Luxe comfort, all night long",
    image: themeSleepwear,
    looks: [],
  },
  {
    id: "travel-essentials",
    title: "Travel Essentials",
    subtitle: "Chic on the go, anywhere",
    image: themeTravel,
    looks: [],
  },
  {
    id: "play-time",
    title: "Play Time",
    subtitle: "Bold colors, free spirits",
    image: themePlaytime,
    looks: [],
  },
];

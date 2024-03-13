export interface MenuItem {
  itemId: string;
  src: string;
  alt: string;
  title: string;
  desc: string;
  prices?: {
    small: number;
    medium?: number ;
    large?: number ;
  };
  calories?: {
    small: number;
    medium?: number;
    large?: number ;
  };
}

interface DrinkItem extends MenuItem {
  prices: {
    small: number;
    medium: number;
    large?: number
  };
}

interface DessertItem extends MenuItem {
  prices: {
    small: number;
    medium?: number;
    large?: number
  };
}




// Define the items as arrays of their respective types
export const pizzaItem = [
  {
    itemId: "fdhybrftguhrfyj",
    src: "/assets/images/quad-pizza.jpeg",
    alt: "quad pizza",
    title: "Quad Pizza",
    desc: "Delicious signature square pizza",
    prices: {
      small: 8.99,
      medium: 13.99,
      large: 15.99,
    },
    calories: {
      small: 250,
      medium: 350,
      large: 450,
    },
  },
  {
    itemId: "fsghdfhhrfyj",
    src: "/assets/images/veggie-pizza.jpeg",
    alt: "veggie pizza",
    title: "Veggie Pizza",
    desc: "Special veggie squared pizza",
    prices: {
      small: 10.99,
      medium: 13.99,
      large: 15.99,
    },
    calories: {
      small: 280,
      medium: 380,
      large: 480,
    },
  },
 


  {
    itemId: "dgjgfkjihgfk",
    src: "/assets/images/supreme-pizza.jpeg",
    alt: "supreme pizza",
    title: "Supreme Pizza",
    desc: "Our supreme squared pizza",
    prices: {
      small: 12.99,
      medium: 14.99,
      large: 17.99,
    },
    calories: {
      small: 270,
      medium: 370,
      large: 470,
    },
  },

  {
    itemId: "ydftrfujyfrrfyj",
    src: "/assets/images/cheese-pizza.jpeg",
    alt: "cheese pizza",
    title: "Cheese Pizza",
    desc: "Our plain cheese squared pizza",
    prices: {
      small: 9.99,
      medium: 11.99,
      large: 12.99,
    },
    calories: {
      small: 200,
      medium: 300,
      large: 400,
    },
  },
];

/**Wings data*/

export const wingItem = [
  {
    itemId: "dgfdhfdfyj",
    src: "/assets/images/buffalo-wings.jpeg",
    alt: "buffalo wings",
    title: "Buffalo Wings",
    desc: "Tossed in our signature buffalo sauce",
    prices: {
      small: 9.99,
      medium: 13.99,
      large: 16.99,
    },
    calories: {
      small: 450,
      medium: 750,
      large: 1000,
    },
  },
  {
    itemId: "dghdfghdgfuhfgykj",
    src: "/assets/images/crispy-chicken.jpeg",
    alt: "crispy chicken",
    title: "Crispy Chicken",
    desc: "Our irresistibly crispy chicken tenders",
    prices: {
      small: 8.99,
      medium: 11.99,
      large: 13.99,
    },
    calories: {
      small: 500,
      medium: 850,
      large: 1050,
    },
  },

  {
    itemId: "jklljhkyhgfgf",
    src: "/assets/images/spicy-garlic.jpeg",
    alt: "spicy wings",
    title: "Spicy Wings",
    desc: "A flavorful spicy garlic wings",
    prices: {
      small: 12.99,
      medium: 14.99,
      large: 16.99,
    },
    calories: {
      small: 480,
      medium: 860,
      large: 1200,
    },
  },
];



export const drinkItem: DrinkItem[] = [
  {
    itemId: "fdgssxgdrghykjguh",
    src: "/assets/images/iced-tea.jpeg",
    alt: "Iced Tea",
    title: "Raspberry Iced Tea",
    desc: "Our delightful raspberry iced tea",
    prices: {
      small: 2.99,
      medium: 3.99,
    },
    calories: {
      small: 70,
      medium: 100,
    },
  },
  {
    itemId: "swrtgdyhgrtujhyty",
    src: "/assets/images/lemonade.jpeg",
    alt: "Quad's Special Lemonade",
    title: "Quad's Lemonade",
    desc: "A refreshing blend of lemon and lime",
    prices: {
      small: 2.99,
      medium: 3.99,
    },
    calories: {
      small: 100,
      medium: 150,
    },
  },
  {
    itemId: "gjhjhhrfyj",
    src: "/assets/images/fountain-drink.jpg",
    alt: "Fountain Sodas",
    title: "Fountain Sodas",
    desc: "Choose from a variety of drinks",
    prices: {
      small: 2.99,
      medium: 3.99,
    },
    calories: {
      small: 100,
      medium: 150,
    },
  },
];

export const dessertItem: DessertItem[] = [
  {
    itemId: "sdggbrfyjrtdhb",
    src: "/assets/images/brownie.jpeg",
    alt: "Brownies",
    title: "Brownies",
    desc: "Our tasty chocolate fudge brownies",
    prices: {
      small: 2.49},
    calories: {
      small: 210
    }
  },
  {
    itemId: "sadgdsryyjhnhgd",
    src: "/assets/images/cookies.jpeg",
    alt: "Cookies",
    title: "Cookies",
    desc: "Choose from classic chocolate chip",
    prices: {
      small: 1.29},
    calories: {
      small: 125
    }
  },
];

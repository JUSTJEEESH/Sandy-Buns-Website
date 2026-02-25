export interface MenuItem {
  name: string;
  price?: string;
  description: string;
  popular?: boolean;
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  addOns?: { name: string; price: string }[];
  note?: string;
}

export interface MenuSection {
  title: string;
  categories: MenuCategory[];
}

export const popularPicks: MenuItem[] = [
  {
    name: "Cinnamon Bun",
    description:
      "Try our famous cinnamon bun. You won't regret it or forget it!",
    popular: true,
  },
  {
    name: "Texas Benedict",
    price: "$15",
    description:
      "An open-faced cheddar jalapeno biscuit topped with garlic cheese breakfast potatoes, 2 scrambled eggs, smothered in made-from-scratch sausage gravy and topped with Texas smoked brisket.",
    popular: true,
  },
  {
    name: "Texas Size Breakfast Burrito",
    price: "$10",
    description:
      "Bacon and sausage, 4 eggs, potatoes, pico de gallo and cheese wrapped in a giant tortilla and served with house-made salsa.",
    popular: true,
  },
];

export const menuSections: MenuSection[] = [
  {
    title: "Breakfast",
    categories: [
      {
        title: "Morning Sammies",
        items: [
          {
            name: 'The "BOB" Breakfast Sandwich',
            price: "$5",
            description:
              "Breakfast on a jalapeno-cheddar biscuit, bun, or bagel ($1 extra). Sausage, bacon, or avocado, egg, cheese.",
          },
          {
            name: "Morning Glory",
            price: "$7",
            description:
              "Bacon & sausage with egg and double cheese on a fresh baked bun.",
          },
          {
            name: "The West Ender",
            price: "$7",
            description:
              "House-made everything bagel, loaded with cream cheese, bacon and tomato.",
          },
          {
            name: "The Rough Night",
            price: "$10",
            description:
              "Morning glory breakfast sandwich smothered in made-from-scratch sausage gravy & queso blanco.",
          },
          {
            name: "Avocado Toast",
            price: "$10",
            description:
              "2 slices of house-made 9-grain bread topped with smashed avocado, sea salt, lime, drizzled with garlic aioli, and garnished with tomatoes and a lime.",
          },
          {
            name: "Honey Butter Chicken Biscuit",
            price: "$7",
            description:
              "Hand-breaded crispy chicken tossed in house-made honey butter on a jalapeno-cheddar biscuit.",
          },
          {
            name: "Brisket Biscuit",
            price: "$9",
            description:
              "House-made jalapeno cheddar biscuit with smashed avocado, smoked brisket, local egg and cheese.",
          },
        ],
      },
      {
        title: "Miss Sandy's Classics",
        items: [
          {
            name: "Biscuits and Gravy",
            price: "$10 (Half $6)",
            description:
              "Fluffy homemade jalapeno-cheddar biscuits topped with made-from-scratch sausage gravy.",
          },
          {
            name: "Big Timer Breakfast",
            price: "$10",
            description:
              "2 eggs cooked to your liking, bacon or sausage, garlic cheese breakfast potatoes & toast or a fresh-made biscuit.",
          },
          {
            name: "Texas Benedict",
            price: "$15",
            description:
              "An open-faced cheddar jalapeno biscuit topped with garlic cheese breakfast potatoes, 2 scrambled eggs, smothered in made-from-scratch sausage gravy and topped with Texas smoked brisket. Garnished with jalapenos.",
          },
          {
            name: "Mother Clucker",
            price: "$14",
            description:
              "An open-faced cheddar jalapeno biscuit topped with garlic cheese breakfast potatoes, 2 scrambled eggs, smothered in made-from-scratch sausage gravy and topped with fried hot honey chicken breast and cowboy candy.",
          },
        ],
        addOns: [
          { name: "Texas smoked brisket", price: "$5" },
          { name: "2 Eggs cooked your way", price: "$2" },
          { name: "Bacon or sausage", price: "$3" },
        ],
      },
      {
        title: "Burritos",
        items: [
          {
            name: "Breakfast Burrito",
            price: "$5",
            description:
              "Bacon, sausage or veggie, 2 eggs, potatoes, pico de gallo and cheese wrapped in a tortilla and served with house made salsa. (Our reincarnation of a gas station burrito)",
          },
          {
            name: "Texas Size Breakfast Burrito",
            price: "$10",
            description:
              "Bacon and sausage, 4 eggs, potatoes, pico de gallo and cheese wrapped in a giant tortilla and served with house-made salsa.",
          },
          {
            name: "The Daybreaker",
            price: "$12",
            description:
              "Texas sized breakfast burrito smothered in made-from-scratch sausage gravy & queso blanco.",
          },
        ],
      },
    ],
  },
  {
    title: "Lunch",
    categories: [
      {
        title: "Appetizers",
        items: [
          {
            name: "Crispy Chicken Tenders",
            price: "$12",
            description:
              "Four hand-breaded crispy tenders with fries and your choice of dipping sauce: Sandy Sauce, Sweet & Sour, Buffalo, Ranch, Honey Butter. Extra Sauce $1.",
          },
          {
            name: "Kinsey's Famous Pork Flautas",
            price: "$12",
            description:
              "Smoked pulled pork, rolled in a flour tortilla with cheese and deep fried. Topped with slaw, chipotle cream sauce and pico de gallo.",
          },
          {
            name: "Brisket Nachos",
            price: "$15",
            description:
              "Crispy corn tortilla chips, topped with house-made queso blanco, smoked brisket, pico de gallo, BBQ sauce, chipotle cream sauce, jalapenos and finished with a dollop of guacamole.",
          },
          {
            name: "Chips & Queso",
            price: "$10",
            description:
              "Crispy tortilla chips with Sandy's queso blanco and house made salsa. Add Brisket $4.",
          },
        ],
      },
      {
        title: "Handmade Burgers",
        subtitle: "All served with fries",
        items: [
          {
            name: "Original Sandy Buns Burger",
            price: "$13",
            description:
              "Burger patty with cheese, lettuce, tomato, pickles, onions, and served with house made special sauce all on a fresh-made bun.",
          },
          {
            name: "Texas 2 Step Burger",
            price: "$15",
            description:
              "Burger patty loaded with mesquite smoked brisket, cheese, pickles, onions, and house-made BBQ sauce all on a fresh-made bun.",
          },
          {
            name: "Tex-Mex Burger",
            price: "$15",
            description:
              "Burger patty loaded with mesquite smoked pulled pork, grilled onions & jalapenos, fresh guacamole, pico de gallo and smothered in queso blanco all on a fresh-made bun.",
          },
          {
            name: "Texas Melt",
            price: "$13",
            description:
              "Burger patty, diced grilled onions, provolone and American cheese, and jalapeno ranch, served on fresh-made Texas toast.",
          },
          {
            name: "Black & Bleu Burger",
            price: "$14",
            description:
              "Garlic aioli, grilled onions, specially seasoned burger patty topped with bleu cheese, bacon and lettuce all on a fresh-made bun.",
          },
        ],
        note: "Upgrade your sandwich side: Garlic sweet potato fries $2, Side salad $3",
      },
      {
        title: "Sandwiches & Such",
        subtitle: "All served with fries. Make any sandwich a wrap $1",
        items: [
          {
            name: "El Cochinito",
            price: "$15",
            description:
              "Mesquite smoked pulled pork with grilled onions & jalapenos, crispy bacon, pico de gallo and smothered in queso blanco all on a fresh-made bun.",
          },
          {
            name: "Brisket Bandito",
            price: "$17",
            description:
              "Mesquite smoked brisket with grilled onions & jalapenos, crispy bacon, pico de gallo and smothered in queso blanco all on a fresh-made bun.",
          },
          {
            name: "CBR",
            price: "$15",
            description:
              "Hand breaded chicken breast tossed in dry ranch seasoning topped with crispy bacon, provolone, lettuce, tomatoes, pickles, and onions and house-made ranch dressing all on a fresh-made bun.",
          },
          {
            name: "Buffalo Chicken Sandwich",
            price: "$14",
            description:
              "Hand-breaded chicken breast tossed in house-made buffalo sauce, blue cheese, lettuce, tomatoes, pickles, and onions and house made ranch dressing all on a fresh-made bun.",
          },
          {
            name: "Blackened Chicken Sandwich",
            price: "$13",
            description:
              "Grilled blackened chicken breast topped with provolone cheese, onions, avocado, lettuce and scratch-made garlic aioli all on a fresh-made bun.",
          },
          {
            name: "The Maverick",
            price: "$14",
            description:
              "Thinly sliced beef cooked to perfection with grilled onions, peppers and jalapenos on a fresh-made bun. Smothered in queso blanco and drizzled with house-made BBQ sauce.",
          },
          {
            name: "The Dirty Bird",
            price: "$15",
            description:
              "Hand breaded chicken breast, grilled onions & jalapenos, fresh guacamole, pico de gallo and smothered in queso blanco on a fresh-made bun.",
          },
          {
            name: "The Ultimate BLT",
            price: "$12",
            description:
              "Five slices of bacon, lettuce, tomato and scratch-made garlic aioli all on a fresh-made focaccia bread.",
          },
          {
            name: "Whiskey Tango Burrito",
            price: "$15",
            description:
              "Texas sized flour tortilla stuffed with smoked brisket, guacamole, pico de gallo, fries, queso blanco, chipotle cream, bbq sauce and rolled to perfection.",
          },
          {
            name: "Sweet & Sour Chicken Sandwich",
            price: "$14",
            description:
              "Hand-breaded chicken breast tossed in house-made sweet & sour sauce with Dijon aioli, grilled onions and peppers, Asian slaw and grilled pineapple all on a fresh-made bun.",
          },
          {
            name: "Grilled Cheesus",
            price: "$11",
            description:
              "Cheddar, Monterey Jack, provolone, and American cheese and scratch-made garlic aioli all on a fresh-made focaccia bread. Add Brisket $4.",
          },
          {
            name: "Veggie Sandwich",
            price: "$11",
            description:
              "Blackened local veggies, lettuce, tomato, avocado, provolone cheese and scratch made garlic aioli on a fresh-made baguette.",
          },
          {
            name: "Cold Veggie Wrap",
            price: "$10",
            description:
              "Smashed avocado, lettuce, tomato, onions, cucumber, provolone cheese and scratch made garlic aioli all wrapped in a tortilla.",
          },
        ],
      },
      {
        title: "Salads",
        subtitle:
          "Dressings: Ranch, Jalapeno Ranch, Blue Cheese, Oil & Vinegar",
        items: [
          {
            name: "Blackened Chicken Salad",
            price: "$13",
            description:
              "Grilled blackened chicken breast, fresh greens, tomato, cucumber, red onions, avocado, cheddar jack cheese served with your choice of house made dressing.",
          },
          {
            name: "Buffalo Chicken Salad",
            price: "$13",
            description:
              "Hand breaded chicken breast tenders, fresh greens, tomato, cucumber, red onions, avocado, blue cheese served with your choice of house made dressing.",
          },
          {
            name: "Cobb Salad",
            price: "$14",
            description:
              "Grilled chicken breast, crispy bacon, fresh greens, tomato, avocado, hard boiled eggs, blue cheese served with your choice of house made dressing.",
          },
        ],
        note: "Add brisket to any meal $5. A la carte brisket (4oz) $7.",
      },
    ],
  },
  {
    title: "Beverages",
    categories: [
      {
        title: "Drinks",
        items: [
          {
            name: "Fresh Squeezed OJ",
            price: "$3",
            description: "Freshly squeezed orange juice.",
          },
          { name: "Soda", price: "$2", description: "Assorted sodas." },
          {
            name: "Bottomless Raspberry Iced Tea",
            price: "$3",
            description: "House-made raspberry iced tea with free refills.",
          },
          {
            name: "Bottomless Coffee",
            price: "$2",
            description: "Fresh brewed coffee with free refills.",
          },
          {
            name: "Iced Coffee",
            price: "$3",
            description: "Chilled and refreshing iced coffee.",
          },
          {
            name: "Smoothie",
            price: "$6",
            description:
              "Strawberry, blueberry, pineapple, mango, papaya, orange, or banana.",
          },
        ],
      },
    ],
  },
  {
    title: "Bakery",
    categories: [
      {
        title: "Fresh Baked Daily",
        items: [
          {
            name: "Famous Cinnamon Buns",
            description:
              "Our signature cinnamon bun — the reason many people walk through the door.",
          },
          {
            name: "Banana Bread",
            description: "Moist, homemade banana bread baked fresh.",
          },
          {
            name: "Muffins",
            description: "Fresh baked each morning. Ask about today's flavors.",
          },
        ],
      },
    ],
  },
];

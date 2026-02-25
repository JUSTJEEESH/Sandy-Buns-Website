import { siteConfig } from "@/lib/siteConfig";
import { faqItems } from "@/lib/faqData";

function RestaurantJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/sandy-buns-logo.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: "Roatán",
      addressRegion: "Islas de la Bahía",
      addressCountry: "HN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "15:00",
      },
    ],
    servesCuisine: [
      "American",
      "Bakery",
      "Breakfast",
      "Tex-Mex",
      "Comfort Food",
    ],
    priceRange: "$5-$17",
    menu: `${siteConfig.url}/menu`,
    acceptsReservations: "No",
    paymentAccepted: "Cash, PayPal",
    currenciesAccepted: "USD, HNL",
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dog Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Takeout", value: true },
    ],
    hasMenu: {
      "@type": "Menu",
      name: "Sandy Buns Full Menu",
      url: `${siteConfig.url}/menu`,
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Breakfast",
          description: "Served all day, 8am-3pm",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Famous Cinnamon Bun",
              description: "Our signature cinnamon bun — the reason many people walk through the door.",
            },
            {
              "@type": "MenuItem",
              name: "Texas Benedict",
              description: "Open-faced cheddar jalapeno biscuit, garlic cheese potatoes, scrambled eggs, sausage gravy, and Texas smoked brisket.",
              offers: { "@type": "Offer", price: "15.00", priceCurrency: "USD" },
            },
            {
              "@type": "MenuItem",
              name: "Texas Size Breakfast Burrito",
              description: "Bacon and sausage, 4 eggs, potatoes, pico de gallo and cheese in a giant tortilla with house-made salsa.",
              offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
            },
            {
              "@type": "MenuItem",
              name: "Biscuits and Gravy",
              description: "Fluffy homemade jalapeno-cheddar biscuits topped with made-from-scratch sausage gravy.",
              offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
            },
            {
              "@type": "MenuItem",
              name: "Honey Butter Chicken Biscuit",
              description: "Hand-breaded crispy chicken tossed in house-made honey butter on a jalapeno-cheddar biscuit.",
              offers: { "@type": "Offer", price: "7.00", priceCurrency: "USD" },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Lunch",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Original Sandy Buns Burger",
              description: "Burger patty with cheese, lettuce, tomato, pickles, onions, and house made special sauce on a fresh-made bun.",
              offers: { "@type": "Offer", price: "13.00", priceCurrency: "USD" },
            },
            {
              "@type": "MenuItem",
              name: "Brisket Nachos",
              description: "Crispy corn tortilla chips, house-made queso blanco, smoked brisket, pico de gallo, BBQ sauce, and guacamole.",
              offers: { "@type": "Offer", price: "15.00", priceCurrency: "USD" },
            },
            {
              "@type": "MenuItem",
              name: "Texas 2 Step Burger",
              description: "Burger patty loaded with mesquite smoked brisket, cheese, pickles, onions, and house-made BBQ sauce.",
              offers: { "@type": "Offer", price: "15.00", priceCurrency: "USD" },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Bakery",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Famous Cinnamon Buns",
              description: "Our signature cinnamon bun — baked fresh every morning.",
            },
            {
              "@type": "MenuItem",
              name: "Chocolate Chip Cookies",
              description: "Warm, gooey chocolate chip cookies baked fresh daily.",
            },
            {
              "@type": "MenuItem",
              name: "Brownies",
              description: "Rich, fudgy brownies made from scratch.",
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Beverages",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Bottomless Coffee",
              description: "Fresh brewed coffee with free refills.",
              offers: { "@type": "Offer", price: "2.00", priceCurrency: "USD" },
            },
            {
              "@type": "MenuItem",
              name: "Smoothie",
              description: "Strawberry, blueberry, pineapple, mango, papaya, orange, or banana.",
              offers: { "@type": "Offer", price: "6.00", priceCurrency: "USD" },
            },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export { RestaurantJsonLd, WebSiteJsonLd, BreadcrumbJsonLd, FAQJsonLd };

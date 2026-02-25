import type { MenuCategory } from "@/lib/menuData";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuCategorySection({ category }: MenuSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="font-heading text-2xl md:text-3xl text-driftwood mb-1">
        {category.title}
      </h3>
      {category.subtitle && (
        <p className="font-body text-ocean text-sm mb-6 italic">
          {category.subtitle}
        </p>
      )}
      {!category.subtitle && <div className="mb-6" />}

      <div className="space-y-4">
        {category.items.map((item) => (
          <div
            key={item.name}
            className={`p-5 rounded-xl shadow-sm transition-all hover:shadow-md ${
              item.popular
                ? "bg-sunset-light/70 border-2 border-sunset/30"
                : "bg-white border border-sand/80"
            }`}
          >
            <MenuItem item={item} />
          </div>
        ))}
      </div>

      {category.addOns && category.addOns.length > 0 && (
        <div className="mt-6 p-4 bg-sunset-light rounded-2xl">
          <p className="font-body text-driftwood font-semibold text-sm mb-2">
            Add-Ons:
          </p>
          <ul className="font-body text-text-body/80 text-sm space-y-1">
            {category.addOns.map((addon) => (
              <li key={addon.name}>
                {addon.name}{" "}
                <span className="text-ocean font-semibold">
                  {addon.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {category.note && (
        <p className="mt-4 font-body text-text-body/60 text-sm italic">
          {category.note}
        </p>
      )}
    </div>
  );
}

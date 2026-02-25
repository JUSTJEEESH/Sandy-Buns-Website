import type { MenuCategory } from "@/lib/menuData";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuCategorySection({ category }: MenuSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="font-heading text-2xl md:text-3xl text-dark-brown mb-1">
        {category.title}
      </h3>
      {category.subtitle && (
        <p className="font-body text-burnt-orange text-sm mb-6 italic">
          {category.subtitle}
        </p>
      )}
      {!category.subtitle && <div className="mb-6" />}

      <div className="space-y-6">
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>

      {category.addOns && category.addOns.length > 0 && (
        <div className="mt-6 p-4 bg-sand/50 rounded-2xl">
          <p className="font-body text-dark-brown font-semibold text-sm mb-2">
            Add-Ons:
          </p>
          <ul className="font-body text-charcoal/80 text-sm space-y-1">
            {category.addOns.map((addon) => (
              <li key={addon.name}>
                {addon.name}{" "}
                <span className="text-burnt-orange font-semibold">
                  {addon.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {category.note && (
        <p className="mt-4 font-body text-charcoal/60 text-sm italic">
          {category.note}
        </p>
      )}
    </div>
  );
}

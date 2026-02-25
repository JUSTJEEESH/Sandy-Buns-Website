import type { MenuItem as MenuItemType } from "@/lib/menuData";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-start gap-4">
        <h4 className="font-heading text-lg text-dark-brown group-hover:text-burnt-orange transition-colors">
          {item.name}
          {item.popular && (
            <span className="ml-2 inline-block bg-burnt-orange text-white text-xs font-body px-2 py-0.5 rounded-full align-middle">
              Popular
            </span>
          )}
        </h4>
        {item.price && (
          <span className="font-body text-burnt-orange font-semibold whitespace-nowrap text-lg">
            {item.price}
          </span>
        )}
      </div>
      <p className="font-body text-charcoal/70 text-sm mt-1 leading-relaxed max-w-2xl">
        {item.description}
      </p>
    </div>
  );
}

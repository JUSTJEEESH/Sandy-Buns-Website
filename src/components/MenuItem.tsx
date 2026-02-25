import type { MenuItem as MenuItemType } from "@/lib/menuData";

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-start gap-4">
        <h4 className="font-heading text-lg text-driftwood group-hover:text-ocean transition-colors">
          {item.name}
          {item.popular && (
            <span className="ml-2 inline-block bg-sunset text-white text-xs font-body px-2 py-0.5 rounded-full align-middle">
              Popular
            </span>
          )}
        </h4>
        {item.price && (
          <span className="font-body text-ocean font-semibold whitespace-nowrap text-lg">
            {item.price}
          </span>
        )}
      </div>
      <p className="font-body text-text-body/80 text-sm mt-1 leading-relaxed max-w-2xl">
        {item.description}
      </p>
    </div>
  );
}

// import { Button } from '@/components/ui/button';
import { Category } from '@/types/product';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {categories.map((category) => (
        <button
          key={category.id}
        //   variant={activeCategory === category.name ? "default" : "outline"}
        //   size="sm"
          onClick={() => onCategoryChange(category.name)}
          className={cn(
            "rounded-full px-8 py-2 transition-all duration-200",
            activeCategory === category.name
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "text-muted-foreground border-border hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50"
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
import { DessertCategory } from "@/data/desserts";

interface DessertCardProps {
  category: DessertCategory;
  onClick: () => void;
  index: number;
}

export const DessertCard = ({ category, onClick, index }: DessertCardProps) => {
  return (
    <button
      onClick={onClick}
      className="dessert-card group cursor-pointer text-left w-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="dessert-card-gradient" />
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="text-5xl mb-2">{category.icon}</span>
          <h3 className="font-display text-2xl font-bold text-card mb-1">
            {category.name}
          </h3>
          <p className="text-sm text-card/80">{category.description}</p>
        </div>
      </div>
    </button>
  );
};

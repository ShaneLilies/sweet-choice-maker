import { Recipe } from "@/data/desserts";
import { Clock, Users } from "lucide-react";

interface VarietyCardProps {
  variety: Recipe;
  onClick: () => void;
  index: number;
}

export const VarietyCard = ({ variety, onClick, index }: VarietyCardProps) => {
  return (
    <button
      onClick={onClick}
      className="dessert-card group cursor-pointer text-left w-full animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={variety.image}
          alt={variety.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="dessert-card-gradient" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h3 className="font-display text-xl font-bold text-card mb-1">
            {variety.name}
          </h3>
          <p className="text-xs text-card/80 mb-3 line-clamp-2">
            {variety.description}
          </p>
          <div className="flex items-center gap-4 text-card/70 text-xs">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {variety.prepTime}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              {variety.servings} servings
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

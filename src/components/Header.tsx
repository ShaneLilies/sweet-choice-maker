import { ChefHat } from "lucide-react";

interface HeaderProps {
  onHomeClick: () => void;
}

export const Header = ({ onHomeClick }: HeaderProps) => {
  return (
    <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={onHomeClick}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">
              Sweet Delights
            </h1>
            <p className="text-xs text-muted-foreground">Dessert Recipe Collection</p>
          </div>
        </button>
      </div>
    </header>
  );
};

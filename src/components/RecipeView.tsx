import { Recipe } from "@/data/desserts";
import { ArrowLeft, Clock, Users, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeViewProps {
  recipe: Recipe;
  onBack: () => void;
  categoryName: string;
}

export const RecipeView = ({ recipe, onBack, categoryName }: RecipeViewProps) => {
  return (
    <div className="animate-fade-in">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6 hover:bg-secondary"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to {categoryName}
      </Button>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
              <ChefHat className="w-5 h-5 text-primary" />
              Ingredients
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-card-foreground/80"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              {recipe.name}
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              {recipe.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Prep: {recipe.prepTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Cook: {recipe.cookTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{recipe.servings} servings</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="font-display text-xl font-semibold mb-6">
              Instructions
            </h3>
            <div className="space-y-0">
              {recipe.steps.map((step, index) => (
                <div key={index} className="recipe-step">
                  <span className="recipe-step-number">{index + 1}</span>
                  <p className="text-card-foreground/80 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

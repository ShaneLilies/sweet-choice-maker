import { useState } from "react";
import { dessertCategories, DessertCategory, Recipe } from "@/data/desserts";
import { DessertCard } from "@/components/DessertCard";
import { VarietyCard } from "@/components/VarietyCard";
import { RecipeView } from "@/components/RecipeView";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type ViewState =
  | { type: "categories" }
  | { type: "varieties"; category: DessertCategory }
  | { type: "recipe"; category: DessertCategory; recipe: Recipe };

const Index = () => {
  const [view, setView] = useState<ViewState>({ type: "categories" });

  const handleCategoryClick = (category: DessertCategory) => {
    setView({ type: "varieties", category });
  };

  const handleVarietyClick = (category: DessertCategory, recipe: Recipe) => {
    setView({ type: "recipe", category, recipe });
  };

  const handleBackToCategories = () => {
    setView({ type: "categories" });
  };

  const handleBackToVarieties = (category: DessertCategory) => {
    setView({ type: "varieties", category });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onHomeClick={handleBackToCategories} />

      <main className="container mx-auto px-4 py-8">
        {view.type === "categories" && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground mb-4">
                Choose Your Dessert
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Explore our collection of delicious dessert recipes. Pick a category
                to discover various treats and learn how to make them at home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dessertCategories.map((category, index) => (
                <DessertCard
                  key={category.id}
                  category={category}
                  onClick={() => handleCategoryClick(category)}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {view.type === "varieties" && (
          <div className="animate-fade-in">
            <Button
              variant="ghost"
              onClick={handleBackToCategories}
              className="mb-6 hover:bg-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              All Desserts
            </Button>

            <div className="text-center mb-10">
              <span className="text-6xl mb-4 block">{view.category.icon}</span>
              <h2 className="section-title text-foreground mb-3">
                {view.category.name}
              </h2>
              <p className="text-muted-foreground text-lg">
                {view.category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {view.category.varieties.map((variety, index) => (
                <VarietyCard
                  key={variety.id}
                  variety={variety}
                  onClick={() => handleVarietyClick(view.category, variety)}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {view.type === "recipe" && (
          <RecipeView
            recipe={view.recipe}
            onBack={() => handleBackToVarieties(view.category)}
            categoryName={view.category.name}
          />
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground text-sm">
            Sweet Delights — Your guide to making delicious desserts at home
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Index;

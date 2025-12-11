export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
}

export interface DessertCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  image: string;
  varieties: Recipe[];
}

export const dessertCategories: DessertCategory[] = [
  {
    id: "cakes",
    name: "Cakes",
    icon: "🎂",
    description: "Fluffy, layered, and absolutely divine",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
    varieties: [
      {
        id: "ube-cake",
        name: "Ube Cake",
        description: "A vibrant purple Filipino cake with sweet, earthy flavor",
        image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800",
        prepTime: "45 mins",
        cookTime: "35 mins",
        servings: 12,
        ingredients: [
          "2 cups all-purpose flour",
          "1 cup ube halaya (purple yam jam)",
          "1 cup sugar",
          "4 eggs",
          "1 cup butter, softened",
          "1 tsp baking powder",
          "1/2 tsp salt",
          "1 cup coconut milk",
          "1 tsp ube extract",
          "Purple food coloring (optional)"
        ],
        steps: [
          "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.",
          "Cream butter and sugar until light and fluffy, about 3-4 minutes.",
          "Add eggs one at a time, beating well after each addition.",
          "Mix in ube halaya and ube extract until well combined.",
          "In a separate bowl, whisk flour, baking powder, and salt.",
          "Alternate adding dry ingredients and coconut milk to the batter.",
          "Divide batter between pans and bake for 30-35 minutes.",
          "Cool completely before frosting with ube buttercream."
        ]
      },
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        description: "Rich, moist, and deeply chocolatey perfection",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
        prepTime: "30 mins",
        cookTime: "40 mins",
        servings: 14,
        ingredients: [
          "2 cups all-purpose flour",
          "2 cups sugar",
          "3/4 cup cocoa powder",
          "2 tsp baking soda",
          "1 tsp salt",
          "2 eggs",
          "1 cup buttermilk",
          "1 cup hot coffee",
          "1/2 cup vegetable oil",
          "2 tsp vanilla extract"
        ],
        steps: [
          "Preheat oven to 350°F. Prepare two 9-inch round pans.",
          "Whisk together flour, sugar, cocoa, baking soda, and salt.",
          "Add eggs, buttermilk, oil, and vanilla. Beat for 2 minutes.",
          "Stir in hot coffee (batter will be thin).",
          "Pour into prepared pans and bake 30-35 minutes.",
          "Cool in pans for 10 minutes, then remove to wire racks.",
          "Frost with chocolate ganache or buttercream."
        ]
      },
      {
        id: "red-velvet-cake",
        name: "Red Velvet Cake",
        description: "Classic Southern cake with cream cheese frosting",
        image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=800",
        prepTime: "35 mins",
        cookTime: "30 mins",
        servings: 12,
        ingredients: [
          "2 1/2 cups all-purpose flour",
          "1 1/2 cups sugar",
          "1 tsp cocoa powder",
          "1 tsp baking soda",
          "1 tsp salt",
          "2 eggs",
          "1 1/2 cups vegetable oil",
          "1 cup buttermilk",
          "2 oz red food coloring",
          "1 tsp vanilla extract",
          "1 tsp white vinegar"
        ],
        steps: [
          "Preheat oven to 350°F. Prepare three 9-inch round pans.",
          "Sift flour, cocoa, baking soda, and salt together.",
          "Beat eggs, sugar, oil, and buttermilk until smooth.",
          "Add food coloring and vanilla, mix well.",
          "Gradually add dry ingredients, mixing until combined.",
          "Fold in vinegar and divide among pans.",
          "Bake for 25-30 minutes until a toothpick comes out clean.",
          "Cool and frost with cream cheese frosting."
        ]
      }
    ]
  },
  {
    id: "cookies",
    name: "Cookies",
    icon: "🍪",
    description: "Crispy, chewy, or somewhere in between",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
    varieties: [
      {
        id: "chocolate-chip",
        name: "Chocolate Chip Cookies",
        description: "The classic cookie everyone loves",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800",
        prepTime: "20 mins",
        cookTime: "12 mins",
        servings: 24,
        ingredients: [
          "2 1/4 cups all-purpose flour",
          "1 tsp baking soda",
          "1 tsp salt",
          "1 cup butter, softened",
          "3/4 cup granulated sugar",
          "3/4 cup brown sugar",
          "2 eggs",
          "2 tsp vanilla extract",
          "2 cups chocolate chips"
        ],
        steps: [
          "Preheat oven to 375°F. Line baking sheets with parchment.",
          "Whisk flour, baking soda, and salt in a bowl.",
          "Cream butter and both sugars until fluffy.",
          "Beat in eggs and vanilla extract.",
          "Gradually mix in flour mixture until just combined.",
          "Fold in chocolate chips.",
          "Drop rounded tablespoons onto prepared sheets.",
          "Bake 9-12 minutes until golden brown edges."
        ]
      },
      {
        id: "sugar-cookies",
        name: "Sugar Cookies",
        description: "Perfect for decorating and gift-giving",
        image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800",
        prepTime: "30 mins",
        cookTime: "10 mins",
        servings: 36,
        ingredients: [
          "3 cups all-purpose flour",
          "1 1/2 tsp baking powder",
          "1/2 tsp salt",
          "1 cup butter, softened",
          "1 1/2 cups sugar",
          "2 eggs",
          "2 tsp vanilla extract",
          "1/2 tsp almond extract"
        ],
        steps: [
          "Whisk flour, baking powder, and salt together.",
          "Cream butter and sugar until light and fluffy.",
          "Add eggs and extracts, beat until combined.",
          "Gradually add flour mixture, mix until dough forms.",
          "Refrigerate dough for at least 1 hour.",
          "Roll out to 1/4 inch thickness, cut into shapes.",
          "Bake at 350°F for 8-10 minutes.",
          "Cool completely before decorating."
        ]
      },
      {
        id: "oatmeal-raisin",
        name: "Oatmeal Raisin Cookies",
        description: "Hearty cookies with warm spices",
        image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=800",
        prepTime: "15 mins",
        cookTime: "12 mins",
        servings: 24,
        ingredients: [
          "1 cup butter, softened",
          "1 cup brown sugar",
          "1/2 cup granulated sugar",
          "2 eggs",
          "1 tsp vanilla",
          "1 1/2 cups flour",
          "1 tsp cinnamon",
          "1 tsp baking soda",
          "3 cups rolled oats",
          "1 cup raisins"
        ],
        steps: [
          "Preheat oven to 350°F.",
          "Cream butter and sugars until fluffy.",
          "Beat in eggs and vanilla.",
          "Mix flour, cinnamon, and baking soda.",
          "Add dry ingredients to butter mixture.",
          "Stir in oats and raisins.",
          "Drop by spoonfuls onto baking sheets.",
          "Bake 10-12 minutes until golden."
        ]
      }
    ]
  },
  {
    id: "pies",
    name: "Pies",
    icon: "🥧",
    description: "Flaky crusts with delicious fillings",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=800",
    varieties: [
      {
        id: "apple-pie",
        name: "Apple Pie",
        description: "Classic American pie with cinnamon-spiced apples",
        image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=800",
        prepTime: "45 mins",
        cookTime: "55 mins",
        servings: 8,
        ingredients: [
          "2 pie crusts (homemade or store-bought)",
          "6 cups sliced apples",
          "3/4 cup sugar",
          "2 tbsp flour",
          "1 tsp cinnamon",
          "1/4 tsp nutmeg",
          "1 tbsp lemon juice",
          "2 tbsp butter",
          "1 egg (for egg wash)"
        ],
        steps: [
          "Preheat oven to 425°F.",
          "Place one crust in a 9-inch pie dish.",
          "Toss apples with sugar, flour, spices, and lemon juice.",
          "Pour filling into crust, dot with butter.",
          "Cover with second crust, crimp edges, and cut vents.",
          "Brush with egg wash.",
          "Bake 45-55 minutes until golden and bubbly.",
          "Cool for at least 2 hours before serving."
        ]
      },
      {
        id: "pumpkin-pie",
        name: "Pumpkin Pie",
        description: "Creamy spiced filling in a buttery crust",
        image: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=800",
        prepTime: "20 mins",
        cookTime: "50 mins",
        servings: 8,
        ingredients: [
          "1 pie crust",
          "15 oz pumpkin puree",
          "3/4 cup sugar",
          "1 tsp cinnamon",
          "1/2 tsp ginger",
          "1/4 tsp cloves",
          "1/2 tsp salt",
          "2 eggs",
          "12 oz evaporated milk"
        ],
        steps: [
          "Preheat oven to 425°F.",
          "Place crust in pie dish, crimp edges.",
          "Whisk pumpkin, sugar, spices, and salt.",
          "Beat in eggs, then stir in evaporated milk.",
          "Pour into crust.",
          "Bake 15 minutes at 425°F, then reduce to 350°F.",
          "Continue baking 40-50 minutes until set.",
          "Cool completely before serving with whipped cream."
        ]
      },
      {
        id: "key-lime-pie",
        name: "Key Lime Pie",
        description: "Tangy and creamy Florida favorite",
        image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800",
        prepTime: "25 mins",
        cookTime: "20 mins",
        servings: 8,
        ingredients: [
          "1 1/2 cups graham cracker crumbs",
          "1/3 cup sugar",
          "6 tbsp melted butter",
          "3 egg yolks",
          "14 oz sweetened condensed milk",
          "1/2 cup key lime juice",
          "1 tbsp lime zest",
          "Whipped cream for topping"
        ],
        steps: [
          "Preheat oven to 350°F.",
          "Mix crumbs, sugar, and butter. Press into pie dish.",
          "Bake crust for 10 minutes, cool.",
          "Beat egg yolks until thick and pale.",
          "Add condensed milk, lime juice, and zest.",
          "Pour into crust and bake 15-20 minutes.",
          "Refrigerate for at least 4 hours.",
          "Top with whipped cream before serving."
        ]
      }
    ]
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    icon: "🍦",
    description: "Cold, creamy frozen delights",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800",
    varieties: [
      {
        id: "vanilla-ice-cream",
        name: "Vanilla Bean Ice Cream",
        description: "Classic creamy vanilla with real vanilla beans",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800",
        prepTime: "20 mins",
        cookTime: "4 hours",
        servings: 8,
        ingredients: [
          "2 cups heavy cream",
          "1 cup whole milk",
          "3/4 cup sugar",
          "1 vanilla bean, split",
          "6 egg yolks",
          "Pinch of salt"
        ],
        steps: [
          "Heat cream, milk, and half the sugar with vanilla bean.",
          "Whisk egg yolks with remaining sugar until pale.",
          "Slowly add hot cream mixture to yolks, whisking constantly.",
          "Return to pot and cook until it coats a spoon.",
          "Strain into a bowl, scraping vanilla seeds into custard.",
          "Chill completely in refrigerator (4+ hours).",
          "Churn in ice cream maker according to directions.",
          "Freeze until firm, about 2 hours."
        ]
      },
      {
        id: "strawberry-ice-cream",
        name: "Strawberry Ice Cream",
        description: "Fresh and fruity with real strawberries",
        image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=800",
        prepTime: "25 mins",
        cookTime: "4 hours",
        servings: 8,
        ingredients: [
          "2 cups fresh strawberries",
          "1 cup sugar, divided",
          "2 cups heavy cream",
          "1 cup whole milk",
          "4 egg yolks",
          "1 tsp vanilla extract"
        ],
        steps: [
          "Mash strawberries with 1/4 cup sugar, let sit 30 minutes.",
          "Heat cream and milk with 1/2 cup sugar.",
          "Whisk yolks with remaining sugar.",
          "Temper yolks with hot cream, return to heat.",
          "Cook until thickened, strain and cool.",
          "Stir in vanilla and strawberries.",
          "Churn in ice cream maker.",
          "Freeze until firm."
        ]
      },
      {
        id: "chocolate-ice-cream",
        name: "Chocolate Ice Cream",
        description: "Rich and decadent chocolate lover's dream",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
        prepTime: "25 mins",
        cookTime: "4 hours",
        servings: 8,
        ingredients: [
          "2 cups heavy cream",
          "1 cup whole milk",
          "3/4 cup sugar",
          "1/2 cup cocoa powder",
          "4 oz dark chocolate, chopped",
          "5 egg yolks",
          "1 tsp vanilla"
        ],
        steps: [
          "Whisk cocoa into cream and milk, heat with sugar.",
          "Remove from heat, add chopped chocolate.",
          "Whisk egg yolks in a bowl.",
          "Temper yolks with chocolate mixture.",
          "Return to heat, cook until thickened.",
          "Strain and add vanilla.",
          "Chill completely, then churn.",
          "Freeze until firm."
        ]
      }
    ]
  },
  {
    id: "brownies",
    name: "Brownies",
    icon: "🟫",
    description: "Fudgy, chewy squares of chocolate heaven",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800",
    varieties: [
      {
        id: "fudge-brownies",
        name: "Fudge Brownies",
        description: "Dense, rich, and intensely chocolatey",
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=800",
        prepTime: "15 mins",
        cookTime: "30 mins",
        servings: 16,
        ingredients: [
          "1 cup butter",
          "2 cups sugar",
          "4 eggs",
          "1 cup cocoa powder",
          "1/2 tsp salt",
          "1 tsp vanilla",
          "1 cup all-purpose flour",
          "1 cup chocolate chips"
        ],
        steps: [
          "Preheat oven to 350°F. Grease 9x13 inch pan.",
          "Melt butter, stir in sugar.",
          "Beat in eggs one at a time.",
          "Add cocoa, salt, and vanilla.",
          "Stir in flour until just combined.",
          "Fold in chocolate chips.",
          "Spread in pan and bake 25-30 minutes.",
          "Cool completely before cutting."
        ]
      },
      {
        id: "blondie-brownies",
        name: "Blondies",
        description: "Brown butter and vanilla version of brownies",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800",
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 16,
        ingredients: [
          "1 cup butter",
          "2 cups brown sugar",
          "2 eggs",
          "2 tsp vanilla",
          "2 cups flour",
          "1 tsp baking powder",
          "1/2 tsp salt",
          "1 cup white chocolate chips"
        ],
        steps: [
          "Preheat oven to 350°F. Grease 9x13 pan.",
          "Brown the butter in a saucepan, cool slightly.",
          "Whisk in brown sugar until smooth.",
          "Beat in eggs and vanilla.",
          "Add flour, baking powder, and salt.",
          "Fold in white chocolate chips.",
          "Spread in pan and bake 22-25 minutes.",
          "Cool before slicing."
        ]
      },
      {
        id: "cream-cheese-brownies",
        name: "Cream Cheese Swirl Brownies",
        description: "Chocolate brownies with tangy cream cheese swirl",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
        prepTime: "20 mins",
        cookTime: "35 mins",
        servings: 16,
        ingredients: [
          "Brownie batter (fudge brownie recipe)",
          "8 oz cream cheese, softened",
          "1/4 cup sugar",
          "1 egg",
          "1 tsp vanilla"
        ],
        steps: [
          "Prepare fudge brownie batter.",
          "Beat cream cheese, sugar, egg, and vanilla.",
          "Spread brownie batter in greased pan.",
          "Dollop cream cheese mixture on top.",
          "Use a knife to create swirls.",
          "Bake at 350°F for 30-35 minutes.",
          "Cool completely before cutting.",
          "Refrigerate for best texture."
        ]
      }
    ]
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    icon: "🧁",
    description: "Individual cakes perfect for any occasion",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800",
    varieties: [
      {
        id: "vanilla-cupcakes",
        name: "Vanilla Cupcakes",
        description: "Light and fluffy with buttercream frosting",
        image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800",
        prepTime: "20 mins",
        cookTime: "20 mins",
        servings: 24,
        ingredients: [
          "1 1/2 cups flour",
          "1 1/2 tsp baking powder",
          "1/4 tsp salt",
          "1/2 cup butter, softened",
          "1 cup sugar",
          "2 eggs",
          "2 tsp vanilla",
          "1/2 cup milk"
        ],
        steps: [
          "Preheat oven to 350°F. Line muffin tins with liners.",
          "Whisk flour, baking powder, and salt.",
          "Cream butter and sugar until fluffy.",
          "Add eggs one at a time, then vanilla.",
          "Alternate adding flour and milk.",
          "Fill liners 2/3 full.",
          "Bake 18-20 minutes until springy.",
          "Cool and frost with vanilla buttercream."
        ]
      },
      {
        id: "red-velvet-cupcakes",
        name: "Red Velvet Cupcakes",
        description: "Mini versions of the Southern classic",
        image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800",
        prepTime: "25 mins",
        cookTime: "22 mins",
        servings: 24,
        ingredients: [
          "2 1/2 cups flour",
          "2 tbsp cocoa powder",
          "1 tsp baking soda",
          "1/2 cup butter",
          "1 1/2 cups sugar",
          "2 eggs",
          "1 cup buttermilk",
          "2 oz red food coloring",
          "1 tsp vanilla",
          "1 tsp vinegar"
        ],
        steps: [
          "Preheat oven to 350°F, line cupcake tins.",
          "Sift flour, cocoa, and baking soda.",
          "Cream butter and sugar.",
          "Add eggs, buttermilk, food coloring, vanilla.",
          "Mix in dry ingredients until smooth.",
          "Fold in vinegar.",
          "Bake 20-22 minutes.",
          "Top with cream cheese frosting."
        ]
      },
      {
        id: "lemon-cupcakes",
        name: "Lemon Cupcakes",
        description: "Bright and zesty with lemon curd filling",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?w=800",
        prepTime: "30 mins",
        cookTime: "20 mins",
        servings: 18,
        ingredients: [
          "1 1/2 cups flour",
          "1 1/2 tsp baking powder",
          "1/4 tsp salt",
          "1/2 cup butter",
          "1 cup sugar",
          "2 eggs",
          "2 tbsp lemon zest",
          "1/4 cup lemon juice",
          "1/2 cup milk",
          "Lemon curd for filling"
        ],
        steps: [
          "Mix flour, baking powder, salt.",
          "Cream butter, sugar, and lemon zest.",
          "Add eggs, lemon juice.",
          "Alternate flour and milk.",
          "Bake at 350°F for 18-20 minutes.",
          "Cool, then core centers.",
          "Fill with lemon curd.",
          "Top with lemon buttercream."
        ]
      }
    ]
  },
  {
    id: "pastries",
    name: "Pastries",
    icon: "🥐",
    description: "Buttery, flaky baked goods",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800",
    varieties: [
      {
        id: "croissants",
        name: "Butter Croissants",
        description: "Flaky, buttery French pastry perfection",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800",
        prepTime: "3 hours",
        cookTime: "18 mins",
        servings: 12,
        ingredients: [
          "4 cups flour",
          "1/3 cup sugar",
          "1 tbsp salt",
          "1 tbsp instant yeast",
          "1 1/4 cups cold milk",
          "1 1/2 cups cold butter (for laminating)",
          "1 egg for egg wash"
        ],
        steps: [
          "Mix flour, sugar, salt, yeast. Add milk to form dough.",
          "Refrigerate dough for 1 hour.",
          "Pound butter into a rectangle, keep cold.",
          "Roll dough, encase butter, fold into thirds.",
          "Rest 30 mins in fridge, repeat folding twice.",
          "Roll out and cut into triangles.",
          "Roll up from base to point, curve into crescent.",
          "Proof 2 hours, brush with egg, bake at 400°F 15-18 mins."
        ]
      },
      {
        id: "danish-pastry",
        name: "Fruit Danish",
        description: "Sweet pastry filled with cream cheese and fruit",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800",
        prepTime: "2 hours",
        cookTime: "20 mins",
        servings: 12,
        ingredients: [
          "Croissant dough (above recipe)",
          "8 oz cream cheese",
          "1/4 cup sugar",
          "1 egg yolk",
          "1 tsp vanilla",
          "Fresh berries or fruit",
          "Apricot glaze"
        ],
        steps: [
          "Prepare croissant dough through laminating.",
          "Beat cream cheese, sugar, yolk, vanilla.",
          "Cut dough into squares.",
          "Place cream cheese in center.",
          "Fold corners toward center.",
          "Top with fruit.",
          "Proof 1 hour, bake at 375°F for 18-20 mins.",
          "Brush with warm apricot glaze."
        ]
      },
      {
        id: "cinnamon-rolls",
        name: "Cinnamon Rolls",
        description: "Soft, gooey rolls with cream cheese glaze",
        image: "https://images.unsplash.com/photo-1609126979532-8c1cde0bb877?w=800",
        prepTime: "2 hours",
        cookTime: "25 mins",
        servings: 12,
        ingredients: [
          "4 cups flour",
          "1/3 cup sugar",
          "1 tsp salt",
          "2 1/4 tsp yeast",
          "1 cup warm milk",
          "1/3 cup butter",
          "1 egg",
          "1 cup brown sugar",
          "3 tbsp cinnamon",
          "Cream cheese frosting"
        ],
        steps: [
          "Mix flour, sugar, salt, yeast. Add milk, butter, egg.",
          "Knead until smooth, let rise 1 hour.",
          "Roll into rectangle, spread with butter.",
          "Mix brown sugar and cinnamon, spread over dough.",
          "Roll up tightly, slice into 12 pieces.",
          "Place in greased pan, rise 30 minutes.",
          "Bake at 350°F for 22-25 minutes.",
          "Top with cream cheese frosting while warm."
        ]
      }
    ]
  },
  {
    id: "puddings",
    name: "Puddings",
    icon: "🍮",
    description: "Creamy, comforting spoonable desserts",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
    varieties: [
      {
        id: "creme-brulee",
        name: "Crème Brûlée",
        description: "Rich custard with caramelized sugar crust",
        image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800",
        prepTime: "20 mins",
        cookTime: "45 mins",
        servings: 6,
        ingredients: [
          "2 cups heavy cream",
          "1 vanilla bean",
          "5 egg yolks",
          "1/2 cup sugar",
          "Pinch of salt",
          "6 tbsp sugar for topping"
        ],
        steps: [
          "Preheat oven to 325°F.",
          "Heat cream with vanilla bean until simmering.",
          "Whisk yolks with sugar and salt.",
          "Slowly add hot cream to yolks.",
          "Strain into ramekins.",
          "Bake in water bath 40-45 minutes.",
          "Chill at least 4 hours.",
          "Top with sugar, torch until caramelized."
        ]
      },
      {
        id: "chocolate-pudding",
        name: "Chocolate Pudding",
        description: "Silky smooth homemade chocolate pudding",
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800",
        prepTime: "15 mins",
        cookTime: "10 mins",
        servings: 6,
        ingredients: [
          "2/3 cup sugar",
          "1/4 cup cocoa powder",
          "3 tbsp cornstarch",
          "1/4 tsp salt",
          "2 3/4 cups milk",
          "2 tbsp butter",
          "1 tsp vanilla"
        ],
        steps: [
          "Whisk sugar, cocoa, cornstarch, salt in pot.",
          "Gradually whisk in milk until smooth.",
          "Cook over medium heat, stirring constantly.",
          "Bring to boil, cook 1 minute until thick.",
          "Remove from heat, add butter and vanilla.",
          "Pour into dishes.",
          "Cover with plastic wrap touching surface.",
          "Chill until set, about 2 hours."
        ]
      },
      {
        id: "rice-pudding",
        name: "Rice Pudding",
        description: "Creamy comfort dessert with warm spices",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800",
        prepTime: "10 mins",
        cookTime: "45 mins",
        servings: 6,
        ingredients: [
          "1/2 cup rice",
          "4 cups milk",
          "1/3 cup sugar",
          "1/4 tsp salt",
          "1 egg, beaten",
          "1 tsp vanilla",
          "Cinnamon for dusting",
          "Raisins (optional)"
        ],
        steps: [
          "Combine rice, milk, sugar, salt in pot.",
          "Cook over medium heat, stirring often.",
          "Simmer 35-40 minutes until rice is tender.",
          "Temper egg with hot pudding, stir back in.",
          "Cook 2 more minutes.",
          "Remove from heat, add vanilla and raisins.",
          "Serve warm or chilled.",
          "Dust with cinnamon."
        ]
      }
    ]
  },
  {
    id: "donuts",
    name: "Donuts",
    icon: "🍩",
    description: "Fried or baked rounds of happiness",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800",
    varieties: [
      {
        id: "glazed-donuts",
        name: "Glazed Donuts",
        description: "Classic yeasted donuts with sweet glaze",
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800",
        prepTime: "2 hours",
        cookTime: "15 mins",
        servings: 12,
        ingredients: [
          "4 cups flour",
          "1/2 cup sugar",
          "1 tsp salt",
          "2 1/4 tsp yeast",
          "1 cup warm milk",
          "1/3 cup butter",
          "2 eggs",
          "Oil for frying",
          "2 cups powdered sugar",
          "1/4 cup milk for glaze"
        ],
        steps: [
          "Mix flour, sugar, salt, yeast.",
          "Add warm milk, butter, eggs. Knead until smooth.",
          "Let rise 1 hour until doubled.",
          "Roll out and cut with donut cutter.",
          "Rise again 30 minutes.",
          "Fry in 350°F oil until golden, about 1 min per side.",
          "Drain on paper towels.",
          "Dip in glaze (powdered sugar + milk)."
        ]
      },
      {
        id: "chocolate-donuts",
        name: "Chocolate Frosted Donuts",
        description: "Rich chocolate glaze on fluffy donuts",
        image: "https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?w=800",
        prepTime: "2 hours",
        cookTime: "15 mins",
        servings: 12,
        ingredients: [
          "Glazed donut recipe base",
          "1 cup chocolate chips",
          "3 tbsp butter",
          "1 cup powdered sugar",
          "3 tbsp milk",
          "Sprinkles (optional)"
        ],
        steps: [
          "Prepare and fry donuts as in glazed recipe.",
          "Melt chocolate chips with butter.",
          "Stir in powdered sugar and milk.",
          "Mix until smooth.",
          "Dip tops of cooled donuts in chocolate.",
          "Add sprinkles if desired.",
          "Let set on wire rack.",
          "Best served same day."
        ]
      },
      {
        id: "apple-cider-donuts",
        name: "Apple Cider Donuts",
        description: "Baked fall-spiced donuts",
        image: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=800",
        prepTime: "20 mins",
        cookTime: "12 mins",
        servings: 12,
        ingredients: [
          "2 cups flour",
          "1 tsp baking powder",
          "1 tsp cinnamon",
          "1/2 tsp nutmeg",
          "1/2 cup sugar",
          "1/4 cup butter, melted",
          "1 egg",
          "3/4 cup apple cider",
          "Cinnamon sugar for coating"
        ],
        steps: [
          "Preheat oven to 350°F. Grease donut pan.",
          "Mix flour, baking powder, spices.",
          "Whisk sugar, butter, egg, cider.",
          "Combine wet and dry ingredients.",
          "Pipe into donut pan.",
          "Bake 10-12 minutes.",
          "Brush warm donuts with melted butter.",
          "Roll in cinnamon sugar."
        ]
      }
    ]
  },
  {
    id: "cheesecakes",
    name: "Cheesecakes",
    icon: "🧀",
    description: "Rich, creamy, and utterly indulgent",
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800",
    varieties: [
      {
        id: "new-york-cheesecake",
        name: "New York Cheesecake",
        description: "Dense, creamy, classic cheesecake",
        image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800",
        prepTime: "30 mins",
        cookTime: "1 hour",
        servings: 12,
        ingredients: [
          "2 cups graham cracker crumbs",
          "1/3 cup sugar",
          "1/2 cup melted butter",
          "32 oz cream cheese, softened",
          "1 cup sugar",
          "1 cup sour cream",
          "4 eggs",
          "2 tsp vanilla"
        ],
        steps: [
          "Preheat oven to 325°F.",
          "Mix crumbs, sugar, butter. Press into springform pan.",
          "Beat cream cheese until smooth.",
          "Add sugar, beat until fluffy.",
          "Mix in sour cream and vanilla.",
          "Add eggs one at a time.",
          "Pour over crust, smooth top.",
          "Bake 55-60 mins. Cool in oven with door cracked."
        ]
      },
      {
        id: "strawberry-cheesecake",
        name: "Strawberry Cheesecake",
        description: "Creamy cheesecake with fresh strawberry topping",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800",
        prepTime: "35 mins",
        cookTime: "1 hour",
        servings: 12,
        ingredients: [
          "New York cheesecake base",
          "2 cups fresh strawberries",
          "1/4 cup sugar",
          "1 tbsp cornstarch",
          "1/4 cup water",
          "1 tbsp lemon juice"
        ],
        steps: [
          "Prepare and bake cheesecake as above.",
          "Slice half the strawberries.",
          "Blend remaining berries with sugar.",
          "Mix cornstarch with water, add to puree.",
          "Cook until thickened.",
          "Add lemon juice, cool slightly.",
          "Arrange sliced berries on cheesecake.",
          "Pour glaze over top, refrigerate."
        ]
      },
      {
        id: "japanese-cheesecake",
        name: "Japanese Cheesecake",
        description: "Light, fluffy, and jiggly cloud-like cake",
        image: "https://images.unsplash.com/photo-1464195244916-405fa0a82545?w=800",
        prepTime: "30 mins",
        cookTime: "1 hour",
        servings: 10,
        ingredients: [
          "8 oz cream cheese",
          "1/4 cup butter",
          "1/2 cup milk",
          "6 eggs, separated",
          "1/2 cup sugar",
          "1/3 cup flour",
          "1/4 cup cornstarch",
          "1/4 tsp cream of tartar"
        ],
        steps: [
          "Preheat oven to 320°F.",
          "Melt cream cheese, butter, milk together.",
          "Whisk in egg yolks, flour, cornstarch.",
          "Beat whites with cream of tartar until foamy.",
          "Gradually add sugar, beat to stiff peaks.",
          "Fold whites into cheese mixture gently.",
          "Pour into lined pan, bake in water bath.",
          "Bake 60-70 mins until golden and jiggly."
        ]
      }
    ]
  }
];

import React, { useState } from "react";

const handleRecipePlanner = () => {
  window.location.href = "/recipePlanner"; // Navigates to the recipe planner
};
const handleProfile = () => {
  window.location.href = "/profile"; // Navigates to the profile
};

const RecipeSections = () => {
  const categories = [
    {
      name: "Soup",
      meals: [
        {
          name: "1- Lentil Soup (4-6 people) - Vegan",
          ingredients: [
            "3 tablespoon of olive oil",
            "1 tablespon of tomato paste",
            "pre-washed 1 cup of lentil",
            "1/2 onion",
            "1 carrot (cut into 4-5 pieces",
            "1 potato (cut into big pieces",
            "Salt, red and black pepper",
            "6 cups of boiled water",
          ],
          instructions: [
            "Add the onion inside a pot with 3 tablespoon of olive oil, let onions caramalize a bit, then add tomato paste, let them cook for another 4-5 minutes",
            "Add both potato and carrot, and let them cook for 3 mins while you mix",
            " Add salt, pepper and any spice you'd like, add the lentils and 6 cups of boiled water",
            " Add 1 cup of lentils, salt, pepper and any spice you'd like,and 6 cups of boiled water, then close the lid",
            "After 40 minutes, use a blender to make soup smooth, ready to serve, Enjoy!",
          ],
        },
        {
          name: "2- Ezo Soup(4-6 people) - Vegan",
          ingredients: [
            "5 tablespon of pre-washed red lentil",
            "5 tablespoon of pre-washed orzo",
            "1 tablespon of tomato paste",
            "1/2 onion",
            "3 tablespoon of olive oil",
            "1 tablespoon of garlic",
            "6 cups of boiled water",
            "Salt, dried- mint, red/black pepper",
          ],
          instructions: [
            "Add the onions and garlic inside a pot with 3 tablespoon of olive oil, let onions caramalize a bit, then add tomato paste, cook for another 4-5 minutes",
            "Add lentils, salt, pepper and any spice you'd like,  and 6 cups of boiled water, close the lid",
            "After 35 minutes, use a blender to make soup smooth, then add orzo and let them cook for 8 minutes, ready to serve, Enjoy!",
          ],
        },
        {
          name: "3- Tomato Soup(4 people)",
          ingredients: [
            "5 tomatoes",
            "2 tablespoon of butter",
            "1 tablespoon of tomato paste",
            "3 cups of flour",
            "4 cups of boiled water",
            "2 tablespoon of gratered cheese",
            "Salt, red and black pepper ",
          ],
          instructions: [
            "Put your diced tomatoes in pan, add 1 tablespoon of butter, garlic and let them cook for 10 minutes",
            "Put your tomatoes in blender to make them smooth, then put back into the pot",
            "Get a pan, put 1 tablespoon of butter in a pan, add your flour and tomato paste and let them cook 3-4 minutes while you stir very well",
            "Put your pan sauce in tomato pot, add salt, black, red pepper and your boiled water, close the lid",
            "let them cook for 20 more minutes, ready to serve, serve with gratered cheese on top, Enjoy! ",
          ],
        },
      ],
    },
    {
      name: "Main Course",
      meals: [
        {
          name: "1- Ground Beef Pasta (4 people)",
          ingredients: [
            "3 tablespoon of olive oil",
            "1 tablespon of tomato paste",
            "1/2 pound ground beef",
            "1/2 onion",
            "1 tablespoon of garlic",
            "1/2 box of Pasta",
            "Salt, red and black pepper",
            "6 cups of boiled water",
          ],
          instructions: [
            "1. Get a pot, add boiled water and pasta in, add some salt, let pasta cook for 12 minutes.",
            "Get a pan, put the onion and garlic inside with 3 tablespoon of olive oil, let onions caramalize a bit",
            "Then add your ground beef and let them cook together for 10 minutes, then add tomato paste, cook for another 4-5 minutes, sauce is ready",
            "Add the sauce into pasta, stir well, ready to serve, Enjoy! ",
          ],
        },
        {
          name: "2- Meat w Potato (4 people)",
          ingredients: [
            "3 tablespoon of olive oil",
            "1 tablespon of tomato paste",
            "2 potatoes",
            "1/2 pound beef or ground beef",
            "1/2 onion",
            "1 tablespoon of garlic",
            "1/2 box of Pasta",
            "Salt, red and black pepper",
            "3 cups of boiled water",
          ],
          instructions: [
            "Get a pot, put the meat inside, add 2 tablespoon of olive oil, let it cook for 15 minutes",
            "Add the onion and garlic inside with 1 tablespoon of olive oil, and tomoto paste",
            "let them cook for another 5-8 minutes while you stir well",
            "Add the diced potatoes, and 3 cups of boiled water, close the lid,it will be ready to serve in 15-20 minutes, Enjoy! ",
          ],
        },
        {
          name: "3- Green Beans (3 people) - Vegan",
          ingredients: [
            "1 diced tomato",
            "1/2 onion",
            "1 lb green beans",
            "1 tablespoon of garlic",
            "1 tablespoon of tomato paste",
            "3 cups of boiled water",
            "Salt, red and black pepper ",
          ],
          instructions: [
            "Get a pot, put the onion and garlic inside with 3 tablespoon of olive oil, let onions caramalize a bit then add your tomato paste, cook for 3 minutes",
            "Then add the diced tomato and let them cook together for 4 minutes, then add your green beans, add your spices, stir well for another minute",
            "Add 3 cups of boiled water, close the lid, it is ready to serve in 20-25 minutes, it is suggested to serve with a rice, Enjoy!",
          ],
        },
        {
          name: "4- Zucchini Pasta (4 people) Vegan",
          ingredients: [
            "3 tablespoon of olive oil",
            "1 tablespon of tomato paste",
            "2 Zucchinis",
            "1/2 onion",
            "1 tablespoon of garlic",
            "1/2 box of Pasta",
            "Salt, red and black pepper",
            "6 cups of boiled water",
          ],
          instructions: [
            " Get a pot, add boiled water and pasta in, add some salt, let pasta cook for 12 minutes.",
            "Get a pan, put the onion and garlic inside with 3 tablespoon of olive oil",
            "Let onions caramalize a bit then add your sliced zucchinis and let them cook together for 10 minutes",
            "Then add tomato paste, cook for another 4-5 minutes, sauce is ready",
            "Add the sauce into pasta, stir well, ready to serve, Enjoy! ",
          ],
        },
      ],
    },
    {
      name: "Desserts",
      meals: [
        {
          name: "1- Chocolate Heaven (2 people) ",
          ingredients: [
            "2 tablespoon of chocolate ice cream",
            "2 tablespoon choice of chocolate cream",
            "2 cups choice of milk",
          ],
          instructions: [
            "Put all of your ingredients inside a blender, mix it really well for 30-45 seconds, your drink is ready to serve,  add some ice cubes inside befor eyou serve, Enjoy!",
          ],
        },
        {
          name: "2- Cocoa Balls (4 people) ",
          ingredients: [
            "1 packet biscuits",
            "3 tablespoon of cocoa powder",
            "1/2 cup of milk",
            "A handful of walnuts",
            "Coconut flakes (optional)",
            "1/2 cup of Melted chocolate chips",
          ],
          instructions: [
            "Get a large cup, add the biscuits, milk, cocoa powder together and mix it really well ",
            "Add wallnuts,and shape them into little balls, then dip them into a sauce",
            "Sprinkle coconut flakes on top, ready to serve, Enjoy!",
          ],
        },
        {
          name: "3- Carrot Balls (4 people)",
          ingredients: [
            "2 grated carrot",
            "3 tablespoon of cocoa powder",
            "1/2 cup of sugar (or sweetener of choice)",
            "1/2 packet of biscuits",
            "2 tablespoon of olive oil",
          ],
          instructions: [
            "Get a pan, add your grated carrot and olive oil, saute them together for 5-8 minutes",
            "Take the pan off the heat and let it cool aside, after its cooled, add your biscuits, sugar and cocoa powder, mix them really well until combined",
            "Add wallnuts,and shape them into little balls, then dip them into a sauce, and sprinkle coconut flakes on top, ready to serve, Enjoy!",
          ],
        },
      ],
    },
    {
      name: "Specialss",
      meals: [
        {
          name: "1- Kofte Meat (4 people)",
          ingredients: [
            "1/2 pound ground beef",
            "1 egg",
            "1 well toasted bread",
            "1 well diced onion (you can also blend it",
            "Salt, red and black pepper",
          ],
          instructions: [
            " Make sure to wash your hands really well",
            "Put your bread into blender, or make sure to cut into really small pieces",
            "Get a large cup, put your raw ground beef, egg, onion, bread, salt, pepper and start to mix them really well for 5-10 minutes (you can get a help of kitchen aid, if not you can use your hands ",
            " Give a shape of round circles with your hand and start to put them into oven tray, based on the sizes of your meats, you may get 10-20 kofte pieces ",
            "Get a regular drinking cup, add tomato paste, salt, pepper, garlic powder and add boiled water to mix it really well, then pour this sauce top of your meats",
            "Bake them in oven in 420 Fahreinheit for 20-25 minutes, you can fry some potatoes while you wait :) Enjoy!",
          ],
        },
        {
          name: "2- Potato Spinach (4 people) - Vegan",
          ingredients: [
            "1/2 packet of spinach",
            "2 diced potatoes",
            "3 tablespoon of olive oil",
            "1 tablespoon of garlic",
            "1 cup of milk",
            "2 tablespoon of flour",
            "Salt, red/black pepper",
            "2 tablespoon of gratered cheese",
          ],
          instructions: [
            "Add the potatoes and garlic inside a pot with 3 tablespoon of olive oil, let them cook for 5 minutes, then add spinach, stir well for another 2 minutes",
            "Then add your flour, stir well, add 1 cup of milk while you still stir",
            "Add any spice you'd like, then transfer everything into an oven tray/cup, add your gratered cheese on top ",
            "Bake for 15-20 minutes in 350 Fahreinheit, ready to serve, Enjoy!",
          ],
        },
        {
          name: "3- Menemen (4 people) - Breakfast",
          ingredients: [
            "1 tomato",
            "2 eggs",
            "1 tablespoon of garlic",
            "1 bell pepper/4-5 small peppers",
            "1 tablespoon of butter",
            "1 tablespoon of gratered cheese",
            "Salt, pepper, any spice you'd like",
          ],
          instructions: [
            "Get a pan, put the peppers and garlic inside with 3 tablespoon of olive oil, let them cook for 10 minutes while you stir once in a while",
            "Put your tomatoes in, stir well, add your spices, let them cook for another 6 minutes",
            "Crack your eggs inside a pan,make sure to stir very well and cook at the same time for the next 4-5 minutes ",
            "Add your gratered cheese on top, it is suggested to serve with toasted bread and cream cheese, Enjoy!",
          ],
        },
      ],
    },
  ];
  const [activeSection, setActiveSection] = useState(null); //initialize activeSection to keep track of active category

  // when user clicks on one of the categories
  const handleSectionClick = (index) => {
    if (activeSection === index) {
      //section is already open
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };

  return (
    <div>
      <h1> Recipe Categories </h1>
      <div className="category-container">
        {categories.map((section, index) => {
          //iterates over the categories array, first element is section name, second is its position in array

          let categoryClass = "";

          switch (section.name) {
            case "Soup":
              categoryClass = "soup";
              break;
            case "Main Course":
              categoryClass = "mainCourse";
              break;
            case "Desserts":
              categoryClass = "desserts";
              break;
            case "Specialss":
              categoryClass = "specials";
              break;
            default:
              break;
          }

          return (
            <div
              key={index}
              className={`category-box ${categoryClass}`}
              onClick={() => handleSectionClick(index)}
            >
              <h2>{section.name}</h2>
            </div>
          );
        })}
        {/* Button Container */}
      </div>
      <div className="button-container">
        <button className="btn btn-success" onClick={handleRecipePlanner}>
          Go to your Recipe Planner Page
        </button>
        <button className="btn btn-primary" onClick={handleProfile}>
          Go to Profile
        </button>
      </div>

      {activeSection !== null && ( //if activeSection is not null, retrieve the corresponding ingredients, instructions for each meal
        <div style={{ marginTop: "20px" }}>
          <h2>{categories[activeSection].name} Meals</h2>
          {categories[activeSection].meals.map((meal, mealIndex) => (
            <div key={mealIndex} style={{ marginBottom: "20px" }}>
              <h3>{meal.name}</h3>
              <h4>Ingredients:</h4>

              {meal.ingredients.map((ingredient, ingredientIndex) => (
                <li key={ingredientIndex}>{ingredient}</li>
              ))}

              <h4>Instructions:</h4>

              {meal.instructions.map((instruction, instructionIndex) => (
                <li key={instructionIndex}>{instruction}</li>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default RecipeSections;

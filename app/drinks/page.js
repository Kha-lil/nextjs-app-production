import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  // just for demo purposes
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  console.log(data);
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <div className="relative h-48 mb-4">
              <Image
                src={drink.strDrinkThumb}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                alt={drink.strDrink}
                className="rounded-md object-cover"
              />
            </div>
            {drink.strDrink}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default DrinksPage;

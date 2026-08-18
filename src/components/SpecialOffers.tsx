const SpecialOffers = () => {
  const offers: string[] = [
    "Buy 1 get second Cheese Free",
    "Buy Soup half price Bread",
    "Get Third off Butter",
  ];

  return (
    <section className="w-full rounded-lg bg-violet-100 px-4 py-2 sm:px-8">

      <h1 className="mb-4 text-center font-bold">
        ✨ Special Offers
      </h1>

      <div className="flex gap-8 overflow-x-auto pb-2">

        {offers.map((offer, index) => 
        (
          <div
            key={index}
            className="flex flex-1 items-center justify-center gap-4 rounded-2xl bg-indigo-300 p-2">
            <img
              src="img.jpg"
              alt="No Image"
              className="h-16 w-16 rounded-2xl bg-white object-cover sm:h-20 sm:w-20"
            />

            <p className="text-sm font-semibold sm:text-lg">
              {offer}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default SpecialOffers;
const Footer = () => 
{
  return (
    <footer className="bg-violet-600 text-white">
      
      <div className="mx-auto flex h-32 max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 md:flex-row">
        
        <h2 className="text-xl font-bold">🛒 GroceryHub</h2>
        <p className="text-sm">
          Fresh groceries at your doorstep.
        </p>

        <p className="text-sm">
          © 2026 GroceryHub
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;

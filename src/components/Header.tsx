import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";




const Header = () => {
  return (
    <header className="w-full px-6 py-8 bg-gradient-to-b from-wedding-pink-light/10 to-background relative overflow-hidden">
      {/* Decorative Background Flowers */}
      <div className="absolute top-2 left-4 w-12 h-12 opacity-5 pointer-events-none">
        <img src={plumeriaFlowers} alt="" className="w-full h-full object-contain transform rotate-12" />
      </div>
      <div className="absolute top-4 right-8 w-16 h-16 opacity-5 pointer-events-none">
        <img src={plumeriaFlowers} alt="" className="w-full h-full object-contain transform -rotate-12" />
      </div>
      <div className="absolute bottom-2 left-1/3 w-10 h-10 opacity-5 pointer-events-none">
        <img src={plumeriaFlowers} alt="" className="w-full h-full object-contain transform rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Main Title with Decorative Elements */}
        <div className="flex flex-col items-center gap-4">
          {/* Decorative line with hearts */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-wedding-pink opacity-60"></div>
            <div className="text-wedding-pink text-lg">♡</div>
            <img src={lovebirdIcon} alt="" className="w-6 h-6 opacity-80" />
            <div className="text-wedding-pink text-lg">♡</div>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-wedding-pink opacity-60"></div>
          </div>
          
          {/* Bismillah */}
          <div className="text-center mb-2">
            <p className="text-lg sm:text-xl font-playfair text-muted-foreground italic mb-1">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </p>
            <p className="text-sm text-muted-foreground/80 font-inter">
              In the name of Allah, the Most Gracious, the Most Merciful
            </p>
          </div>

          {/* Main Wedding Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dancing font-bold text-foreground">
            Wedding Ceremony
          </h1>
          
          {/* Decorative curves and flowers */}
          <div className="flex items-center gap-2 mt-2">
            <div className="w-8 h-8 opacity-20">
              <img src={plumeriaFlowers} alt="" className="w-full h-full object-contain transform rotate-12" />
            </div>
            <div className="w-20 h-px bg-gradient-to-r from-wedding-pink/40 via-wedding-pink to-wedding-pink/40"></div>
            <div className="text-wedding-pink text-xl">❦</div>
            <div className="w-20 h-px bg-gradient-to-l from-wedding-pink/40 via-wedding-pink to-wedding-pink/40"></div>
            <div className="w-8 h-8 opacity-20">
              <img src={plumeriaFlowers} alt="" className="w-full h-full object-contain transform -rotate-12" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
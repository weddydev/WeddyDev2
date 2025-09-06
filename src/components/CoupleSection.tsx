import { Facebook, Twitter, Instagram } from "lucide-react";
import plumeriaFlowers from "@/assets/plumeria-flowers.png";

const CoupleSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          {/* Decorative flowers - top left */}
          <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 opacity-60 z-10">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-45"
            />
          </div>

          {/* Decorative flowers - top right */}
          <div className="absolute top-8 right-0 w-36 h-36 sm:w-44 sm:h-44 opacity-70 z-10">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-12"
            />
          </div>

          {/* Decorative flowers - bottom left */}
          <div className="absolute bottom-0 left-8 w-28 h-28 sm:w-36 sm:h-36 opacity-50 z-10">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-45"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-20">
            {/* Jenny Wilson - Left Side */}
            <div className="flex-1 text-center">
              <div className="relative mb-8">
                {/* Profile Image Circle */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/lovable-uploads/talha.png"
                    alt="Jenny Wilson"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>


              {/* Name */}
              <h3 className="text-4xl sm:text-5xl font-dancing font-bold text-primary mb-6">
                Syed Mohammed 
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-inter text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                      <strong>Software Developer, M.Tech </strong> <br />
                      S/O : Syed Mohammed khan
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <Facebook size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <Twitter size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <Instagram size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Leslie Alexander - Right Side */}
            <div className="flex-1 text-center">
              <div className="relative mb-8">
                {/* Profile Image Circle */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="/lovable-uploads/bhabhi1.jpg"
                    alt="Leslie Alexander"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-4xl sm:text-5xl font-dancing font-bold text-primary mb-6">
                Habeeba
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-inter text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
              <strong> B.sc </strong> <br />
              D/O : Shaik Rahman
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <Facebook size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <Twitter size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <Instagram size={16} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-wedding-pink flex items-center justify-center hover:bg-wedding-pink hover:text-white transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
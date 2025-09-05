import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";

const WeddingPartySection = () => {
  const weddingParty = [
    {
      id: 1,
      name: "Leslie Alexander",
      role: "Brides Brother",
      image: "/lovable-uploads/m1.jpg"
    },
    {
      id: 2,
      name: "Jenny Wilson", 
      role: "Brides Sister",
      image: "/lovable-uploads/m2.webp"
    },
    {
      id: 3,
      name: "Robert Fox",
      role: "Brides Brother", 
      image: "/lovable-uploads/m3.jpg"
    },
    {
      id: 4,
      name: "Jerome Bell",
      role: "Groom's Sister",
      image: "/lovable-uploads/m4.webp"
    },
    {
      id: 5,
      name: "Esther Howard",
      role: "Groom's Brother",
      image: "/lovable-uploads/m5.webp"
    },
    {
      id: 6,
      name: "Bessie Cooper",
      role: "Brides ",
      image: "/lovable-uploads/m6.jpg"
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          {/* Decorative line and bird */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-px bg-wedding-pink opacity-50"></div>
            <div className="mx-4">
              <img src={lovebirdIcon} alt="" className="w-8 h-8 opacity-70" />
            </div>
            <div className="w-16 h-px bg-wedding-pink opacity-50"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dancing font-bold text-primary">
            Bridesmaids & Groomsmen
          </h2>
        </div>

        {/* Background decorative flowers */}
        <div className="absolute top-32 left-4 w-24 h-24 opacity-10">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform -rotate-12"
          />
        </div>
        <div className="absolute top-40 right-8 w-32 h-32 opacity-10">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform rotate-45"
          />
        </div>
        <div className="absolute bottom-32 left-12 w-20 h-20 opacity-10">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform rotate-90"
          />
        </div>
        <div className="absolute bottom-40 right-4 w-28 h-28 opacity-10">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform -rotate-45"
          />
        </div>

        {/* Wedding Party Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {weddingParty.map((person, index) => (
            <div key={person.id} className="text-center relative">
              {/* Decorative flowers around each person */}
              <div className="absolute -top-4 -left-4 w-8 h-8 opacity-20">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform rotate-12"
                />
              </div>
              <div className="absolute -top-2 -right-6 w-6 h-6 opacity-15">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform -rotate-45"
                />
              </div>
              <div className="absolute -bottom-6 -left-2 w-7 h-7 opacity-15">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform rotate-90"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-20">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform -rotate-12"
                />
              </div>

              {/* Profile Image */}
              <div className="relative mx-auto mb-6">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-dancing font-bold text-primary mb-2">
                {person.name}
              </h3>

              {/* Role */}
              <p className="text-wedding-pink font-inter text-sm font-medium tracking-wide">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingPartySection;
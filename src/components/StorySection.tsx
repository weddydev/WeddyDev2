import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";

const StorySection = () => {
  return (
    <section className="w-full px-6 py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          {/* Decorative flowers around title */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <img src={lovebirdIcon} alt="" className="w-10 h-10 opacity-80 mx-auto mb-4" />
              <div className="absolute -top-2 -left-6 w-8 h-8 opacity-50">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform -rotate-45"
                />
              </div>
              <div className="absolute -top-2 -right-6 w-8 h-8 opacity-50">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform rotate-45"
                />
              </div>
            </div>
          </div>

          {/* Left side decorative flowers */}
          <div className="absolute top-8 left-0 sm:left-16 w-16 h-16 opacity-40">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-12"
            />
          </div>
          <div className="absolute top-16 left-8 sm:left-24 w-12 h-12 opacity-30">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-45"
            />
          </div>

          {/* Right side decorative flowers */}
          <div className="absolute top-8 right-0 sm:right-16 w-16 h-16 opacity-40">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-12"
            />
          </div>
          <div className="absolute top-16 right-8 sm:right-24 w-12 h-12 opacity-30">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-45"
            />
          </div>

          <div className="pt-12">
            <h2 className="text-5xl sm:text-6xl font-dancing font-bold text-primary mb-8 relative z-10">
              Our Sweet Story
            </h2>
            
            {/* Decorative heart line below title */}
            <div className="flex justify-center mb-6">
              <svg
                width="150"
                height="30"
                viewBox="0 0 150 30"
                className="mx-auto"
              >
                {/* Heart shape */}
                <path
                  d="M75 20 C75 12, 65 8, 60 15 C55 8, 45 12, 45 20 C45 25, 60 35, 60 35 C60 35, 75 25, 75 20 Z"
                  fill="hsl(var(--wedding-pink))"
                  opacity="0.8"
                />
                {/* Decorative lines */}
                <path
                  d="M20 15 Q 40 10, 45 15"
                  stroke="hsl(var(--wedding-pink))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M75 15 Q 110 10, 130 15"
                  stroke="hsl(var(--wedding-pink))"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>

            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-wedding-pink flex items-center justify-center bg-white shadow-sm">
                <div className="w-6 h-6 bg-wedding-pink rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative flowers */}
        <div className="absolute top-20 left-0 w-64 h-64 opacity-10 pointer-events-none">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform -rotate-12"
          />
        </div>
        <div className="absolute top-40 right-0 w-72 h-72 opacity-10 pointer-events-none">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform rotate-45"
          />
        </div>
        <div className="absolute bottom-20 left-20 w-48 h-48 opacity-10 pointer-events-none">
          <img
            src={plumeriaFlowers}
            alt=""
            className="w-full h-full object-contain transform rotate-90"
          />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-wedding-pink opacity-30 transform -translate-x-1/2 hidden lg:block"></div>

          {/* Story Item 1 - Image Left, Content Right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-20 relative">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-wedding-pink rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"></div>
            
            {/* Left Side - Image */}
            <div className="flex-1 lg:pr-8">
              <div className="relative max-w-md ml-auto">
                <div className="bg-white p-4 rounded-lg shadow-lg transform rotate-1">
                  <img
                    src="/lovable-uploads/f18caf4b-a804-4a60-a329-35c5660a9fac.png"
                    alt="First time we met"
                    className="w-full h-64 sm:h-80 object-cover rounded-md"
                  />
                </div>
                {/* Decorative flowers around image */}
                <div className="absolute -top-4 -right-4 w-16 h-16 opacity-60">
                  <img
                    src={plumeriaFlowers}
                    alt=""
                    className="w-full h-full object-contain transform rotate-12"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 lg:pl-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-wedding-pink max-w-md">
                <h3 className="text-3xl sm:text-4xl font-dancing font-bold text-primary mb-2">
                  Nikah – A Sacred Bond
                </h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-wedding-pink rounded-full"></div>
                  <span className="text-wedding-pink font-inter font-medium">"And We created you in pairs."
<br />
— Qur'an 78:8</span>
                  <div className="flex-1 h-px bg-wedding-pink opacity-30"></div>
                </div>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
               Nikah is not just a contract, but a divine bond that completes half of faith, bringing peace, love, and protection between two souls. </p>
              </div>
            </div>
          </div>

          {/* Story Item 2 - Content Left, Image Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 mb-20 relative">
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-wedding-pink rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"></div>
            
            {/* Right Side - Image */}
            <div className="flex-1 lg:pl-8">
              <div className="relative max-w-md mr-auto">
                <div className="bg-white p-4 rounded-lg shadow-lg transform -rotate-1">
                  <img
                    src="/lovable-uploads/q2.webp"
                    alt="Our first date"
                    className="w-full h-64 sm:h-80 object-cover rounded-md"
                  />
                </div>
                {/* Decorative flowers around image */}
                <div className="absolute -top-4 -left-4 w-16 h-16 opacity-60">
                  <img
                    src={plumeriaFlowers}
                    alt=""
                    className="w-full h-full object-contain transform -rotate-45"
                  />
                </div>
              </div>
            </div>

            {/* Left Side - Content */}
            <div className="flex-1 lg:pr-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-r-4 border-wedding-pink max-w-md ml-auto lg:ml-0">
                <h3 className="text-3xl sm:text-4xl font-dancing font-bold text-primary mb-2">
                Love & Mercy in Marriage
                </h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-wedding-pink rounded-full"></div>
                  <span className="text-wedding-pink font-inter font-medium">And among His signs is that He created for you spouses from among yourselves, that you may find tranquility in them, and He placed between you love and mercy. Indeed in that are signs for people who reflect.
<br />
— Qur'an 30:21</span>
                  <div className="flex-1 h-px bg-wedding-pink opacity-30"></div>
                </div>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
              Marriage is built on compassion, care, and mercy — a relationship where two hearts find peace with each other</p>
              </div>
            </div>
          </div>

          {/* Final Timeline Element */}
          <div className="flex justify-center">
            <div className="w-8 h-8 bg-wedding-pink rounded-full flex items-center justify-center">
              <img src={lovebirdIcon} alt="" className="w-4 h-4 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
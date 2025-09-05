import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/haldi.jpg",
      alt: "Engagement Photos",
      category: "Engagement",
      className: "row-span-2"
    },
    {
      id: 2,
      src: "/lovable-uploads/marriage2.avif",
      alt: "Pre-wedding Moments",
      category: "Pre-Wedding",
      className: "row-span-1"
    },
    {
      id: 3,
      src: "/lovable-uploads/marriage3.jpg",
      alt: "Haldi Ceremony",
      category: "Haldi",
      className: "row-span-2"
    },
    {
      id: 4,
      src: "/lovable-uploads/marriage4.jpg",
      alt: "Mehendi Ceremony",
      category: "Mehendi", 
      className: "row-span-1"
    },
    {
      id: 5,
      src: "/lovable-uploads/marriage5.avif",
      alt: "Sagai Ceremony",
      category: "Sagai",
      className: "row-span-1"
    },
    {
      id: 6,
      src: "/lovable-uploads/marriage6.webp",
      alt: "Wedding Preparations",
      category: "Preparation",
      className: "row-span-1"
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 relative">
          {/* Decorative elements around title */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <img src={lovebirdIcon} alt="" className="w-8 h-8 opacity-70 mx-auto mb-4" />
          </div>

          {/* Left side decorative flowers */}
          <div className="absolute top-8 left-4 sm:left-20 w-12 h-12 opacity-30">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-12"
            />
          </div>
          <div className="absolute top-16 left-8 sm:left-32 w-8 h-8 opacity-25">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-45"
            />
          </div>

          {/* Right side decorative flowers */}
          <div className="absolute top-8 right-4 sm:right-20 w-12 h-12 opacity-30">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform rotate-12"
            />
          </div>
          <div className="absolute top-16 right-8 sm:right-32 w-8 h-8 opacity-25">
            <img
              src={plumeriaFlowers}
              alt=""
              className="w-full h-full object-contain transform -rotate-45"
            />
          </div>

          <div className="pt-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dancing font-bold text-primary mb-6">
              Sweet Captured Moments
            </h2>
            
            {/* Decorative line */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-px bg-wedding-pink opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px]">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg shadow-lg ${image.className}`}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
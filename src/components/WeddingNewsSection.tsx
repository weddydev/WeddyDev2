import plumeriaFlowers from "@/assets/plumeria-flowers.png";
import lovebirdIcon from "@/assets/lovebird-icon.png";

const WeddingNewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      category: "",
      title: "Haldi Function",
      author: "By Family & Friends",
      date: "22 Sep 2026",
      description: "The Haldi ceremony is a beautiful ritual where turmeric paste is applied to the bride and groom. It symbolizes purity, prosperity, and wards off evil. It’s filled with laughter, blessings, and vibrant yellow hues.",
      image: "/lovable-uploads/t1.webp",

    },
    {
      id: 2,
      category: "Wedding",
      title: "Mehendi Function",
      author: "By Family & Friends",
      date: "25 Sep 2026",
      description: "The Mehendi ceremony celebrates joy and artistry. Intricate henna designs are applied to the bride’s hands and feet, symbolizing love, happiness, and good fortune. The evening is filled with music, dance, and fun.",
      image: "/lovable-uploads/t2.jpg",

    },
    {
      id: 3,
      category: "Photography",
      title: "Sanchak Function",
      author: "By Family & Friends",
      date: "25 Sep 2026",
      description: "The Sanchak (pre-wedding) gathering is where close relatives and friends come together to bless the couple. It’s marked by traditional rituals, cultural songs, and a heartwarming family atmosphere.",
      image: "/lovable-uploads/t3.jpg",

    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-background to-wedding-pink-light/20 relative overflow-hidden">
      {/* Background Decorative Flowers */}
      <div className="absolute top-10 left-10 w-20 h-20 opacity-10 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform rotate-12"
        />
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-10 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform -rotate-45"
        />
      </div>
      <div className="absolute top-1/2 left-5 w-16 h-16 opacity-8 pointer-events-none">
        <img
          src={plumeriaFlowers}
          alt=""
          className="w-full h-full object-contain transform rotate-90"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Decorative line and heart */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-20 h-px bg-wedding-pink opacity-60"></div>
            <div className="mx-4">
              <img src={lovebirdIcon} alt="" className="w-8 h-8 opacity-80" />
            </div>
            <div className="w-20 h-px bg-wedding-pink opacity-60"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-dancing font-bold text-foreground mb-4">
            Read Our Wedding News
          </h2>
        </div>

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {newsArticles.map((article, index) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group"
            >
              {/* Decorative flowers on hover */}
              <div className="absolute -top-2 -right-2 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none z-10">
                <img
                  src={plumeriaFlowers}
                  alt=""
                  className="w-full h-full object-contain transform rotate-12"
                />
              </div>

              {/* Article Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4"> 
                  {/* <span className="bg-white/90 text-muted-foreground px-3 py-1 rounded-full text-xs font-inter font-medium backdrop-blur-sm">
                    {article.category}
                  </span> */}
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-foreground mb-3 group-hover:text-wedding-pink transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Author and Date */}
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground font-inter">
                  <span>By {article.author}</span>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <span>{article.date}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground font-inter text-sm leading-relaxed mb-5 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                {/* <a
                  href={article.readMoreLink}
                  className="inline-flex items-center text-wedding-pink font-inter text-sm font-medium hover:text-primary transition-colors duration-200 group/link"
                >
                  Read More...
                  <svg 
                    className="w-4 h-4 ml-1 transform transition-transform duration-200 group-hover/link:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingNewsSection;
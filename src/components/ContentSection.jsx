const ContentSection = () => {
  const features = [
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Crafted with the finest materials and attention to detail that defines luxury."
    },
    {
      icon: "🌿",
      title: "Natural Ingredients",
      description: "Sustainably sourced ingredients that respect both you and the environment."
    },
    {
      icon: "🎁",
      title: "Exclusive Collections",
      description: "Limited edition pieces that represent the pinnacle of craftsmanship."
    },
    {
      icon: "🌟",
      title: "Personalized Service",
      description: "Bespoke experiences tailored to your unique preferences and style."
    }
  ];

  return (
    <section className="bg-luxury-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-luxury-900 mb-6">
            The Art of Luxury
          </h2>
          <p className="text-xl text-luxury-600 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect harmony of tradition and innovation, where every detail 
            is meticulously crafted to create moments of pure elegance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-luxury-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-luxury-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-luxury-900 mb-6">
            Begin Your Luxury Journey
          </h3>
          <p className="text-lg text-luxury-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our exclusive newsletter and be the first to discover new collections, 
            limited editions, and special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 border border-luxury-200 rounded-full focus:outline-none focus:border-accent-400 focus:ring-2 focus:ring-accent-100 transition-all"
            />
            <button className="bg-luxury-900 text-white px-8 py-3 rounded-full hover:bg-luxury-800 transition-colors font-medium whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const galleryImages = [
    {
      src: "/img/cb76ce81-735a-4ce2-8eda-44d6b4065008.jpg",
      alt: "Свадебная церемония",
      category: "Свадьбы"
    },
    {
      src: "/img/7a79d676-b61a-4b44-bdf8-3a41f42a13c8.jpg",
      alt: "Корпоративное мероприятие",
      category: "Корпоративы"
    },
    {
      src: "/img/ec1fa34f-3b47-4e94-aec2-a73180023609.jpg",
      alt: "День рождения",
      category: "Праздники"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">Портфолио</h2>
          <p className="text-lg text-muted-foreground">
            Фотографии с проведённых мероприятий
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl hover:shadow-lg transition-all">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge variant="secondary" className="mb-2">{image.category}</Badge>
                  <p className="text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
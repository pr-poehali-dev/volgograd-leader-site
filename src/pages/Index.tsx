import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: "Свадебное торжество",
      description: "Создам атмосферу волшебства в ваш особенный день",
      icon: "Heart",
      price: "от 25 000 ₽",
      features: ["Выездная регистрация", "Ведение банкета", "Развлекательная программа"]
    },
    {
      title: "Корпоративные мероприятия",
      description: "Профессиональное ведение деловых событий",
      icon: "Briefcase",
      price: "от 20 000 ₽",
      features: ["Презентации", "Награждения", "Тимбилдинг"]
    },
    {
      title: "Юбилеи и дни рождения",
      description: "Сделаю ваш праздник незабываемым",
      icon: "Gift",
      price: "от 18 000 ₽",
      features: ["Музыкальное сопровождение", "Конкурсы", "Поздравления"]
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Спасибо за незабываемую свадьбу! Все гости были в восторге от программы.",
      event: "Свадьба"
    },
    {
      name: "Игорь Смирнов",
      text: "Корпоратив прошёл на высшем уровне. Рекомендую всем!",
      event: "Корпоратив"
    },
    {
      name: "Елена Козлова",
      text: "Юбилей мамы удался благодаря профессиональному подходу.",
      event: "Юбилей"
    }
  ];

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Mic" size={28} className="text-primary" />
              <span className="text-xl font-bold text-secondary">EventHost</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">Обо мне</a>
              <a href="#services" className="text-sm hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-sm hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-sm hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="hidden md:block">
              Заказать звонок
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary/5 to-secondary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary">
                  Ведущий мероприятий в Волгограде
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-secondary leading-tight">
                  Сделаю ваш праздник 
                  <span className="text-primary"> незабываемым</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Профессиональное ведение свадеб, корпоративов, юбилеев и любых других мероприятий. 
                  Более 5 лет опыта и сотни довольных клиентов.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать мероприятие
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Мероприятий</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/img/cb76ce81-735a-4ce2-8eda-44d6b4065008.jpg" 
                  alt="Ведущий мероприятий" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Обо мне</h2>
              <p className="text-lg text-muted-foreground">
                Привет! Меня зовут Александр, и я профессиональный ведущий мероприятий в Волгограде. 
                За более чем 5 лет работы я провёл свыше 200 мероприятий различного масштаба.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Award" size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle>Опыт</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Более 5 лет профессиональной деятельности в сфере event-индустрии
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Users" size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle>Подход</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Индивидуальный подход к каждому клиенту и мероприятию
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Star" size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle>Качество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Высокий уровень сервиса и 100% довольных клиентов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Провожу мероприятия любого формата и масштаба с полным сценарным сопровождением
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon name={service.icon as any} size={48} className="text-primary" />
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Gallery Section */}
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

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о моей работе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{review.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.event}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Цены</h2>
            <p className="text-lg text-muted-foreground">
              Доступные тарифы для любого бюджета
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Базовый</CardTitle>
                <div className="text-3xl font-bold text-primary">15 000 ₽</div>
                <CardDescription>До 4 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Ведение мероприятия
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Музыкальное оформление
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Базовые конкурсы
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="text-center border-primary shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <div className="text-3xl font-bold text-primary">25 000 ₽</div>
                <CardDescription>До 6 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Полное ведение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Профессиональное оборудование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Развлекательная программа
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Игры и конкурсы
                  </li>
                </ul>
                <Button className="w-full">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <div className="text-3xl font-bold text-primary">40 000 ₽</div>
                <CardDescription>Весь день</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    VIP ведение
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Топовое оборудование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Индивидуальный сценарий
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Фото/видео сопровождение
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Контакты</h2>
              <p className="text-lg opacity-90">
                Свяжитесь со мной для обсуждения вашего мероприятия
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="opacity-90">+7 (844) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="opacity-90">host@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Локация</p>
                      <p className="opacity-90">Волгоград и область</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="opacity-90">Ежедневно 9:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                <Separator className="bg-white/20" />

                <div>
                  <h3 className="text-xl font-semibold mb-4">Социальные сети</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-secondary">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-secondary">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                    <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-secondary">
                      <Icon name="Phone" size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Заказать звонок</CardTitle>
                  <CardDescription className="text-white/80">
                    Оставьте заявку, и я свяжусь с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="tel" 
                      placeholder="Номер телефона" 
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea 
                      placeholder="Тип мероприятия и пожелания" 
                      rows={3}
                      className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Отправить заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/5 py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Mic" size={24} className="text-primary" />
              <span className="font-semibold text-secondary">EventHost</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 EventHost. Все права защищены.
              </p>
              <p className="text-sm text-muted-foreground">
                Профессиональный ведущий мероприятий в Волгограде
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
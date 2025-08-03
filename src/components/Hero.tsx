import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
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
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Services() {
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

  return (
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
  );
}
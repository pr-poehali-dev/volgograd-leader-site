import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function Reviews() {
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

  return (
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
  );
}
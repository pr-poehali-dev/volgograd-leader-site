import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

export default function About() {
  return (
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
  );
}
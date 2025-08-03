import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

export default function Contact() {
  return (
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
  );
}
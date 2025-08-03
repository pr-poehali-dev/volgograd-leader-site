import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

export default function Pricing() {
  return (
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
  );
}
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
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
  );
}
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
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
  );
}
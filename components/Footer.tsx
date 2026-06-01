import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-[#151516] w-full py-16 px-6 sm:px-12 lg:px-24 text-bone/60 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="space-y-4">
          <Logo variant="light" showSubtitle={true} />
        </div>

        <div className="space-y-2 font-sans text-sm md:text-right">
          <p className="text-bone/80">City Bell / Gonnet, Buenos Aires</p>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <a href="https://wa.me/" className="hover:text-copper transition-colors">WhatsApp</a>
            <span className="hidden md:inline text-bone/30">•</span>
            <a href="mailto:contacto@cotacero.com" className="hover:text-copper transition-colors">contacto@cotacero.com</a>
            <span className="hidden md:inline text-bone/30">•</span>
            <a href="https://instagram.com/cotacero" className="hover:text-copper transition-colors">@cotacero</a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 font-sans text-xs flex flex-col md:flex-row justify-between items-center text-bone/40">
        <p>© {new Date().getFullYear()} Cota Cero. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Premium Architectural Finishing</p>
      </div>
    </footer>
  );
}

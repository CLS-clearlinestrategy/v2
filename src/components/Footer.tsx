import OrganicJewel from "./OrganicJewel";
import jewelPatternBg from "@/assets/jewel-pattern-bg.png";

const Footer = () => {
  return (
    <footer className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Pattern texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: `url(${jewelPatternBg})`, backgroundSize: '450px', backgroundRepeat: 'repeat' }}
      />
      <div className="container-narrow section-padding pb-10 lg:pb-10 relative z-10">
        <div className="grid gap-16 md:grid-cols-3 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <OrganicJewel className="w-8 h-8" opacity={0.6} />
              <h3 className="font-display text-2xl font-medium tracking-wide">Visage</h3>
            </div>
            <p className="font-body text-sm text-primary-foreground/60 leading-loose">
              Clínica Estética Integrativa Avançada.<br />
              Naturalidade construída com método.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Contato
            </p>
            <div className="space-y-3 font-body text-sm text-primary-foreground/70">
              <p>(61) 99999-9999</p>
              <p>contato@visageclinica.com.br</p>
            </div>
          </div>

          {/* Location */}
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-6">
              Localização
            </p>
            <p className="font-body text-sm text-primary-foreground/70 leading-loose">
              Brasília — Gama, DF<br />
              Brasil
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/20 pt-10 text-center">
          <p className="font-body text-xs text-primary-foreground/35 tracking-wider">
            © {new Date().getFullYear()} Visage. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

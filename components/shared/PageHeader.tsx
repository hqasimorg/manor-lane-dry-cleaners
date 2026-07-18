import { Container } from "@/components/layout/Container";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <Container>
        {breadcrumbs && (
          <nav className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  <a
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-white/80 max-w-2xl">{subtitle}</p>
        )}
      </Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-2xl lg:text-4xl font-bold text-neutral-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-neutral-dark-grey max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

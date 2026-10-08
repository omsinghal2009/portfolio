export default function SectionHeading({ subtitle, title, description }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {subtitle && (
        <span className="inline-block text-sm font-semibold text-primary-400 tracking-wider uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-surface-200/50 mt-4 text-base sm:text-lg">
          {description}
        </p>
      )}
      {/* Decorative line */}
      <div className="mt-6 flex items-center justify-center gap-2">
        <div className="w-12 h-0.5 rounded-full bg-primary-500/50" />
        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500" />
        <div className="w-12 h-0.5 rounded-full bg-accent-500/50" />
      </div>
    </div>
  );
}

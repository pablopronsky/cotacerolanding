export function Logo({ variant = 'light', showSubtitle = false }: { variant?: 'dark' | 'light', showSubtitle?: boolean }) {
  const textColor = variant === 'light' ? 'text-bone' : 'text-[#1E1E20]';
  const subtitleColor = variant === 'light' ? 'text-bone/60' : 'text-[#1E1E20]/60';

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`flex items-center gap-3 font-sans font-bold tracking-[0.25em] text-3xl md:text-4xl ${textColor}`}>
        <span>COTA</span>
        <div className="relative flex items-center justify-center h-full min-h-[1.5em] w-3">
          <div className="absolute w-[1px] h-full bg-copper"></div>
          <div className="absolute w-2 h-2 bg-copper"></div>
        </div>
        <span>CERO</span>
      </div>
      {showSubtitle && (
        <div className={`mt-3 text-[0.65rem] md:text-[0.75rem] tracking-[0.3em] font-medium uppercase ${subtitleColor}`}>
          Superficies y Terminaciones
        </div>
      )}
    </div>
  );
}

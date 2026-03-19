export function PageLoader() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-7xl items-center px-6 py-24">
      <div className="grid w-full gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="h-4 w-28 animate-pulseSoft rounded-full bg-slate-200" />
          <div className="h-12 w-full animate-pulseSoft rounded-2xl bg-slate-200" />
          <div className="h-12 w-5/6 animate-pulseSoft rounded-2xl bg-slate-200" />
          <div className="h-4 w-full animate-pulseSoft rounded-full bg-slate-200" />
          <div className="h-4 w-4/5 animate-pulseSoft rounded-full bg-slate-200" />
        </div>
        <div className="h-72 animate-pulseSoft rounded-[28px] bg-slate-200" />
      </div>
    </div>
  );
}

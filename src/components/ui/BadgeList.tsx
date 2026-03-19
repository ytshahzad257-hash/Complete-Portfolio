interface BadgeListProps {
  items: string[];
}

export function BadgeList({ items }: BadgeListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

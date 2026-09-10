export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-[2rem]">{title}</h2>
      {intro ? <p className="mt-3 text-muted">{intro}</p> : null}
    </div>
  );
}

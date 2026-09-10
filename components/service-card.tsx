import Image from "next/image";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:shadow-[0_0_0_1px_rgba(7,91,53,0.28),0_18px_46px_rgba(7,91,53,0.24)]">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-sage-soft">
        <Image
          src={service.image}
          alt={`${service.name} treatment`}
          fill
          loading="eager"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[15px] font-semibold">{service.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{service.description}</p>
      </div>
    </article>
  );
}

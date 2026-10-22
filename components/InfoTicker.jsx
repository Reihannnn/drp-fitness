import { siteInfo, pricingPlans, personalTrainerPlans } from "@/data/site";

const memberPrice = pricingPlans.find((plan) => plan.name === "1 Bulan")?.options[0]?.price;
const trainerPrice = personalTrainerPlans[0]?.price;

const items = [
  `MEMBER GYM ${memberPrice} / BULAN`,
  `PERSONAL TRAINER MULAI ${trainerPrice} / SESI`,
  `BUKA ${siteInfo.hours.toUpperCase()}`,
];

export default function InfoTicker() {
  return (
    <div className="sticky top-0 z-[60] overflow-hidden border-b border-white/10 bg-lime-400 py-2 text-zinc-950 shadow-lg shadow-lime-400/20">
      <div className="ticker-track flex w-max" aria-label={items.join(" • ")}>
        {[0, 1].map((copy) => (
          <div className="flex shrink-0 items-center" key={copy} aria-hidden={copy === 1}>
            {items.map((item) => (
              <span className="mx-5 flex items-center gap-5 text-xs font-extrabold tracking-[0.12em] sm:text-sm" key={item}>
                {item}
                <span className="text-zinc-950/50" aria-hidden="true">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

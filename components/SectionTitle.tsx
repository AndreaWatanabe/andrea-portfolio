import Reveal from "./Reveal";

type SectionTitleProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

/** Centred heading with a crochet chain-stitch rule underneath it. */
export default function SectionTitle({ kicker, title, subtitle }: SectionTitleProps) {
  return (
    <Reveal className="section-title">
      <p className="section-kicker">
        <span aria-hidden="true">✿</span> {kicker}
      </p>
      <h2>{title}</h2>
      <span className="title-stitch" aria-hidden="true" />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  );
}

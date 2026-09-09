import Image from "next/image";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { hasPhoto, hasResume, photoSrc, resumeSrc } from "@/lib/assets";
import { profile } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle
        kicker="about me"
        title="Studying economics, building things, learning by making"
        subtitle="The person behind the spreadsheets."
      />

      <div className="about-grid">
        <Reveal className="about-portrait-wrap">
          <div className="about-portrait">
            {hasPhoto ? (
              <Image
                src={photoSrc as string}
                alt={profile.name}
                fill
                sizes="(max-width: 900px) 80vw, 380px"
                className="about-portrait-img"
              />
            ) : (
              <div className="about-portrait-placeholder">
                <span aria-hidden="true">✿</span>
                <p>
                  Drop a photo at
                  <code>public/photo.jpg</code>
                  and it appears here.
                </p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="about-copy" delay={0.08}>
          <p className="about-lead">
            I&rsquo;m an Economics student at Simon Fraser University with a
            concentration in Data Analysis.
          </p>

          <p>
            I like the intersection of business, data, technology, and design, because
            that&rsquo;s where messy information turns into something clear, useful, and
            easy to act on. Most of my work starts with a pile of records nobody wants
            to open and ends with a dashboard, a document, or a tool someone actually
            uses.
          </p>

          <p>
            Right now that looks like maintaining a database of several thousand workers
            and employers at the Consulate, building Copilot agents that halved my email
            load, and putting together a Power BI dashboard in my own time. Outside of
            that I&rsquo;m training for Ironman Victoria and crocheting on the commute.
          </p>

          <div className="about-highlights">
            <span>Economics @ SFU</span>
            <span>Data Analysis concentration</span>
            <span>Spanish · English · French</span>
            <span>Vancouver, BC</span>
          </div>

          {hasResume && (
            <a href={resumeSrc as string} className="button button-primary about-resume">
              View résumé ↗
            </a>
          )}
        </Reveal>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact-footer">
      <Reveal className="contact-inner">
        <div className="contact-copy">
          <p className="card-kicker">contact</p>
          <h2>Let&rsquo;s connect.</h2>
          <p>
            Open to co-op opportunities, product and data projects, and conversations
            about design, business, and technology.
          </p>
        </div>

        <div className="contact-links">
          <a href="mailto:sakurawt32@gmail.com" className="email-link">
            sakurawt32@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/andreawatanabe"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            LinkedIn ↗
          </a>
        </div>
      </Reveal>

      <p className="colophon">
        Built with Next.js · <span aria-hidden="true">✿</span> {new Date().getFullYear()}
      </p>
    </section>
  );
}

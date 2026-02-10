export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[3fr,2fr] items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Education4Students</h2>
            <p className="text-muted-foreground mb-4">
              Education4Students helps motivated applicants from Azerbaijan and the region find the right study program
              in Europe. From the first questions to your first day at university, we guide you through every step of
              the process.
            </p>
            <p className="text-muted-foreground">
              We focus especially on Austria, Germany and Italy – countries with strong universities, affordable or low
              tuition fees, and high quality of life. Our role is to translate complex admission rules into a clear,
              realistic plan for you.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <h3 className="text-sm font-semibold mb-1">Personal guidance</h3>
              <p className="text-xs text-muted-foreground">
                We look at your grades, language level and budget to suggest realistic university and program options –
                not generic lists.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <h3 className="text-sm font-semibold mb-1">Trusted university network</h3>
              <p className="text-xs text-muted-foreground">
                We work with a focused list of universities we know well – including Klagenfurt, Vienna, Bonn, Pavia and
                more – so you understand what each expects.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-5 shadow-card">
              <h3 className="text-sm font-semibold mb-1">Clear, transparent process</h3>
              <p className="text-xs text-muted-foreground">
                You always know the next step: documents, deadlines, language requirements, visa and arrival planning.
                No hidden conditions or surprise fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


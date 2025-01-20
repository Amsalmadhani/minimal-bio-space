import { motion } from "framer-motion";

const highlights = [
  {
    year: "2024",
    title: "pre-seed & seed investor",
    company: "venrex",
    description: "investing in early stage start ups in consumer, consumer tech, enterprise SaaS & AI"
  },
  {
    year: "2023",
    title: "pre-seed & seed investor",
    company: "arc ventures",
    description: "invested in early stage start ups in biotech & deeptech",
    trackRecord: [
      {
        name: "sania therapeutics",
        link: "https://www.saniarx.com/",
        description: "gene therapies for nervous system disorders"
      },
      {
        name: "turion space",
        link: "https://turionspace.com/",
        description: "satellites for space domain awareness"
      },
      {
        name: "addionics",
        link: "https://addionics.com/",
        description: "new 3D current collector architecture to optimize battery performance"
      }
      // Add more investments as needed
    ]
  },
  {
    year: "2020",
    title: "clinical neuroscience researcher",
    company: "mass eye and ear hospital, harvard university teaching hospital",
    description: "researched the pathophysiology of vestibular disorders and ran clinical trials",
    publications: [
      {
        name: "how peripheral vestibular damage affects velocity storage: a causative explanation",
        link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9437187/#:~:text=Results%20also%20suggested%20that%20even,signal%2Dto%2Dnoise%20ratio.",  // Replace with actual publication link
      },
      {
        name: "vestibular dysfunction in NF2–related schwannomatosis",
        link: "https://academic.oup.com/braincomms/article/5/2/fcad089/7084587?login=false",  // Replace with actual publication link
      },
      {
        name: "evidence for cognitive impairment in patients with vestibular disorders",
        link: "https://pubmed.ncbi.nlm.nih.gov/35930032/",  // Replace with actual publication link
      }
    ]
  },
  { 
    year: "2017",
    title: "neuroscience researcher (undergrad)",
    company: "zuckerman mind brain behavior institute, columbia university",
    description: "mentored by nobel prize winner (eric kandel) and studied the molecular mechanisms of fear and anxiety disorders, i.e., PTSD",
    publications: [
      {
        name: "a multi sensory circuit for gating intensive aversive experiences (contributed to data)",
        link: "https://www.biorxiv.org/content/10.1101/2021.05.01.441648v1.full.pdf",  // Replace with actual publication link
      }
    ]
  },
  { 
    year: "2016-2020",
    title: "barnard college, columbia university",
    company: "b.a. neuroscience & animal behavior",
    description: "(TBH spent more time in the lab than class)"
  }
];

export const Career = () => {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-mono font-bold mb-8"
      >
        Career Highlights
      </motion.h2>
      <div className="space-y-8">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border border-muted p-6 rounded-lg hover:border-primary/50 transition-colors"
          >
            <div className="font-mono text-sm text-muted-foreground mb-2">
              {highlight.year}
            </div>
            <h3 className="text-lg font-semibold mb-1">{highlight.title}</h3>
            <div className="text-muted-foreground mb-2">{highlight.company}</div>
            <p className="text-sm text-muted-foreground mb-4">{highlight.description}</p>
            
            {highlight.trackRecord && (
              <>
                <div className="font-semibold text-sm mb-2">track record:</div>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {highlight.trackRecord.map((record, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      <a 
                        href={record.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline"
                      >
                        {record.name}
                      </a>
                      {" - "}
                      {record.description}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {highlight.publications && (
              <>
                <div className="font-semibold text-sm mb-2">publications:</div>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  {highlight.publications.map((publication, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      <a 
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline"
                      >
                        {publication.name}
                      </a>
                      {publication.description}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
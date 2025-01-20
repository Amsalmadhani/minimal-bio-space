import { motion } from "framer-motion";

export const Bio = () => {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      {/* Information Diet button positioned absolutely to the left */}
      <a 
        href="/information-diet" 
        className="hidden bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200 fixed left-4"
        style={{ top: "38.3rem" }}
      >
        Information Diet
      </a>

      {/* New Button */}
      <a 
        href="/new-button-link" 
        className="hidden bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200 fixed left-4"
        style={{ top: "42.1rem" }}  // Adjust the top position as needed
      >
        Projects
      </a>    

      {/* New Button */}
      <a 
        href="/new-button-link" 
        className="hidden bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200 fixed left-4"
        style={{ top: "45.9rem" }}  // Adjust the top position as needed
      >
        Blogs
      </a>  

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-mono font-bold mb-8"
      >
        Bio
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg leading-relaxed text-muted-foreground mb-8"
      >
        I am a neuroscience researcher turned venture capitalist. I became a VC because it gave me the opportunity to intensely research something new every day, and to use my high-risk appetite and optimism to back fearless indiviuals making a real impact. I believe founders are the engine of human progress. 
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg leading-relaxed text-muted-foreground mb-8"
      >
        Currently focused on connecting with founders who are building in AI, software, and consumer. Please reach out if you are building or thinking of building, no matter how crazy the idea is. I prefer conversations > pitches.
      </motion.p>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg leading-relaxed text-muted-foreground mb-8"
      >
        Email me at amsal@venrex.com to talk venture (or anything else).
      </motion.p>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg leading-relaxed text-muted-foreground mb-8"
      >
        //
      </motion.p>
      
      <div className="relative flex">
        <div className="mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            Things that bring me joy
          </motion.p>
          <ul className="list-disc pl-5 text-lg leading-relaxed text-muted-foreground mt-2">
            <li>unplanned moments</li>
            <li>being in awe of neuroscience and tech</li>
            <li>competing in sports (lacrosse for ten years and brazilian jiu jitsu)</li>
            <li>conversations that immediately cut to the core (what’s your purpose > what’s your job)</li>
            <li>listening to hip hop & rap music from the greats (drake, jcole, kendrick)</li>
            <li>conversations about parenting, religion, philosophy of life & psychedelic research</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
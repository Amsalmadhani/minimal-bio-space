import { Hero } from "@/components/Hero";
import { Bio } from "@/components/Bio";
import { Career } from "@/components/Career";
import { Obsessions } from "@/components/Obsessions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Bio />
      <Career />
      <Obsessions />
    </div>
  );
};

export default Index;
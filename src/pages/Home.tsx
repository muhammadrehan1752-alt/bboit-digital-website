import { motion } from "motion/react";
import {
  Hero,
  WhyBalochistan,
  ExploreMap,
  Opportunities,
  Sectors,
  Gwadar,
  People,
  Leadership,
  KnowledgeCentre,
  NewsEvents,
  DataMetrics,
  Partners
} from "../components/home";

export function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <WhyBalochistan />
      <ExploreMap />
      <Opportunities />
      <Sectors />
      <Gwadar />
      <People />
      <Leadership />
      <DataMetrics />
      <KnowledgeCentre />
      <NewsEvents />
      <Partners />
    </div>
  );
}

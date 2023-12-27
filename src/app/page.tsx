import {
  ActionCameraSection,
  Advantage,
  Banner,
  Category,
  Footer,
  Products,
  WhyUs,
} from "@/components";
import Advertizement from "@/components/home/Advertizement";
import Features from "@/components/home/features/Features";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Advantage />
      <Category />
      <Products />
      <WhyUs />
      <Features />
      <ActionCameraSection />
      <Advertizement />
      <Footer />
    </main>
  );
}

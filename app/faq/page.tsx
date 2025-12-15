import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadCumb from "@/components/BreadCumb";
import Faq from "@/components/Faq";

export default function page() {
  return (
    <div className="bg-primary">
      <Header />
     <BreadCumb
  title="FAQ"
  subtitle="Find quick answers regarding our visa application process, legal services, client eligibility, and global immigration policies."
/>
      <Faq />
      <Footer />
    </div>
  );
}

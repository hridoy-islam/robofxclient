import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadCumb from "@/components/BreadCumb";
import Faq from "@/components/Faq";

export default function page() {
  return (
    <div>
      <Header />
      <BreadCumb
        title="FAQ"
        subtitle="Find quick answers to common questions about CryptoMinerX capabilities, setup, and support."
      />
      <Faq />
      <Footer />
    </div>
  );
}

import Footer from "@/components/Footer";
import BreadCumb from "@/components/BreadCumb";
import Faq from "@/components/Faq";
import Header from "@/components/Header";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Added paddingTop to layout to account for fixed navbar */}
        <BreadCumb
          title="FAQ"
          subtitle="Find quick answers regarding installation, strategies, risk management, and software compatibility."
         
        />

        <Faq />

      <Footer />
    </div>
  );
}

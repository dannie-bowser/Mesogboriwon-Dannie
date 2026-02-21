import figma from "@/assets/EM logos/figma.png";
import canva from "@/assets/EM logos/canva.png";
import mailchimp from "@/assets/EM logos/mailchimp.png";
import klaviyo from "@/assets/EM logos/klaviyo.png";
import befree from "@/assets/EM logos/befree.png";
import hubspot from "@/assets/EM logos/hubspot.png";  
import activecampaign from "@/assets/EM logos/activecampaign.png";  
import constantcontact from "@/assets/EM logos/constantcontact.png";
import mailerlite from "@/assets/EM logos/mailerlite.png";
import servicetitan from "@/assets/EM logos/servicetitan.png";
import zoho from "@/assets/EM logos/zoho.png";

const Tools = () => {
  const logos = [
    figma, canva, mailchimp, klaviyo, befree, hubspot,
    activecampaign, constantcontact, mailerlite, servicetitan, zoho
  ];

  return (
    <section className="py-5 relative bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-1xl md:text-2xl font-bold mb-2 text-primary/40">
            My Tech{' '}
            <span className="text-primary/50">Stack</span>
          </h2>
      </div>
      {/* SEAMLESS INFINITE MARQUEE */}
      <div className="marquee-container">
        <div className="marquee-track">
          {/* Duplicate logos once for seamless scroll */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="marquee-item">
              <img src={logo} alt="logo" className="h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;

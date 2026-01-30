import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: `When I first connected with JaGoCoach, I wasn’t looking for a coach — I was looking for clarity. I was navigating a complex leadership transition, balancing global responsibilities with personal shifts I hadn’t fully named. What stood out was the way I was listened — not just to what I said, but to what I didn’t. The sessions weren’t formulaic. They were fluid, intuitive, and surprisingly precise. We explored narrative patterns, emotional blind spots, and leadership identity in ways that felt both strategic and deeply human. I left each conversation lighter, clearer, and more aligned. Very Impactful.`,
    author: "RK, Partner, Deloitte, Americas",
  },
  {
    quote: `Running a company means you’re constantly solving — for people, for growth, for yourself. Over the years, JaGoCoach gave me the steer and the space to think differently. It wasn’t about fixing anything. It was about seeing things clearer, asking better questions, and getting out of my own way. The approach is calm, sharp, and refreshingly real. No jargon. Just honest conversations that shift things. Highly recommended for any leader who wants to grow without losing their center.`,
    author: "P Bangar, CEO Tech Co., California",
  },
  {
    quote: `Managing and cooking in a kitchen is chaos. You’re managing people, pressure, and your own head — all at once. I came to JaGoCoach thinking I needed help with burnout. What I got was something deeper. I didn’t get give me a checklist. My coach asked the right questions, held space, and helped me reconnect with why I started cooking in the first place. The sessions felt like a quiet reset — no judgment, just clarity. I still have tough days, but I move through them differently now. With more breath. More balance.`,
    author: "Chef R Mishra, Midlands United Kingdom",
  },
  {
    quote: `As a qualified doctor, I’m trained to notice patterns. But even with that lens, there are moments when clarity escapes you — when the story you’re living feels misaligned with the life you’re building. JaGoCoach offered a space that was both structured and intuitive. The CEO’s approach is grounded, emotionally precise, and refreshingly non-performative. We didn’t just talk — we recalibrated. The integration of psychological frameworks and narrative insight was seamless. I left each session with more than insight — I left with movement.`,
    author: "Dr. M. Bartling, Colorado, USA",
  },
  {
    quote: `When I was living and working in London, the pace was relentless. As a General Manager, I was constantly switched on — managing teams, targets, and the quiet pressure to keep it all together. I didn’t realise how much that lifestyle had shaped my identity until I stepped away. Moving to Phuket on retirement visa was meant to be a fresh start, but I found myself carrying the same mental patterns into a slower life. JaGoCoach has stood with me in my journey, helping me unpack the transition — not just logistically, but emotionally. We worked through the shift in identity, the challenges of slowing down, and the need to redefine success on my own terms. The coaching was calm, clear, and deeply human. The chats gave me the vitality and clarity to settle without losing myself.`,
    author: "T. Brewin, Phuket, Thailand",
  },
  {
    quote: `I have worked nearly all over Europe and travelled extensively. I know that coaching cannot remove uncertainty or be a panacea to all problems and challenges but can give clarity, confidence and welcome sense of control and contentment. That’s what JaGoCoach did me in time of need. Having retired few years ago, a needed clarity with a few personal challenges which they provided in a very settled, caring and friendly way. I speak to The Coach often and see JaGoCoach as my companion to chat confidentiality and as a sounding board.`,
    author: "M Boaden, Switzerland",
  },
  {
    quote: `I was at crossroads to decide if I should continue to work which was giving be good income or go ahead and study. I was getting differing opinions from my family, friends teachers, leaving be absolutely confused! That’s when I reached out to JaGoCoach and after a few session I had new sense of direction and renewed motivations and clarity. I have recently graduated from a leading Universiy and have kept in JaGoCoach and currently using their services to prepare for upcoming interviews. Cannot recommend enough.`,
    author: "Dev, New Delhi",
  },
  {
    quote: `I am a super successful professional on the surface but I am full of self-doubt and rather unsure beneath the surface. A couple of time a year, I noticed I would hit a lot tide – something only I would know and over the years I mastered the art of hiding my emotions and feelings. JagoCoach helped me handle myself and I am a very different person in my own approach and how I handle myself. In short, I have not learnt through multiple interactions with JaGoCoach on how to handle myself and enjoy life.`,
    author: "M. Zhang",
  },
];

const WellBeing = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#0c2b16] py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-white"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            <span className="italic font-medium">Well Being</span> Resources
          </motion.h2>
          <motion.p
            className="text-white mt-3 max-w-2xl mx-auto text-base md:text-[1.2vw]"
            variants={subheadingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
          >
            Hear from real clients about how JaGoCoach helped them gain clarity, focus, and balance.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-start">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md w-full md:w-[45%] lg:w-[30%] overflow-hidden p-6 flex flex-col justify-between"
              // variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.3 }}
              // transition={{ delay: 0.2 * index }}
            >
              <p className="text-gray-700 text-sm md:text-[.8vw] leading-relaxed mb-5">{t.quote}</p>
              <span className="text-gray-800 text-sm font-medium">{t.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellBeing;

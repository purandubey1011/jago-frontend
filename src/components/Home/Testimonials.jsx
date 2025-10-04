import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  // SwiperCore.use([ Navigation, Pagination]);
 const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
      name: "RK",
      role: "Partner, Deloitte, Americas",
      text: "When I first connected with JaGoCoach, I wasn’t looking for a coach — I was looking for clarity. I was navigating a complex leadership transition, balancing global responsibilities with personal shifts I hadn’t fully named. What stood out was the way I was listened — not just to what I said, but to what I didn’t. The sessions weren’t formulaic. They were fluid, intuitive, and surprisingly precise. We explored narrative patterns, emotional blind spots, and leadership identity in ways that felt both strategic and deeply human. I left each conversation lighter, clearer, and more aligned. Very Impactful.",
    },
    {
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      name: "P Bangar",
      role: "CEO, Tech Co., California",
      text: "Running a company means you’re constantly solving — for people, for growth, for yourself. Over the years, JaGoCoach gave me the steer and the space to think differently. It wasn’t about fixing anything. It was about seeing things clearer, asking better questions, and getting out of my own way. The approach is calm, sharp, and refreshingly real. No jargon. Just honest conversations that shift things. Highly recommended for any leader who wants to grow without losing their center.",
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      name: "Chef R Mishra",
      role: "Chef, Midlands United Kingdom",
      text: "Managing and cooking in a kitchen is chaos. You’re managing people, pressure, and your own head — all at once. I came to JaGoCoach thinking I needed help with burnout. What I got was something deeper. My coach asked the right questions, held space, and helped me reconnect with why I started cooking in the first place. The sessions felt like a quiet reset — no judgment, just clarity. I still have tough days, but I move through them differently now. With more breath. More balance.",
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      name: "Dr. M. Bartling",
      role: "Doctor, Colorado, USA",
      text: "As a qualified doctor, I’m trained to notice patterns. But even with that lens, there are moments when clarity escapes you — when the story you’re living feels misaligned with the life you’re building. JaGoCoach offered a space that was both structured and intuitive. The CEO’s approach is grounded, emotionally precise, and refreshingly non-performative. We didn’t just talk — we recalibrated. The integration of psychological frameworks and narrative insight was seamless. I left each session with more than insight — I left with movement.",
    },
    {
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "T. Brewin",
      role: "General Manager, Phuket, Thailand",
      text: "When I was living and working in London, the pace was relentless. As a General Manager, I was constantly switched on — managing teams, targets, and the quiet pressure to keep it all together. Moving to Phuket on retirement visa was meant to be a fresh start, but I found myself carrying the same mental patterns into a slower life. JaGoCoach has stood with me in my journey, helping me unpack the transition — not just logistically, but emotionally. We worked through the shift in identity, the challenges of slowing down, and the need to redefine success on my own terms. The coaching was calm, clear, and deeply human.",
    },
    {
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      name: "M Boaden",
      role: "Retired Professional, Switzerland",
      text: "I have worked nearly all over Europe and travelled extensively. I know that coaching cannot remove uncertainty or be a panacea to all problems and challenges but can give clarity, confidence and welcome sense of control and contentment. That’s what JaGoCoach did me in time of need. Having retired few years ago, I needed clarity with a few personal challenges which they provided in a very settled, caring and friendly way. I see JaGoCoach as my companion to chat confidentially and as a sounding board.",
    },
    {
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
      name: "Dev",
      role: "Student, New Delhi",
      text: "I was at crossroads to decide if I should continue to work which was giving me good income or go ahead and study. I was getting differing opinions from my family, friends, teachers, leaving me absolutely confused! That’s when I reached out to JaGoCoach and after a few sessions I had new sense of direction and renewed motivation. I have recently graduated from a leading University and currently using their services to prepare for upcoming interviews. Cannot recommend enough.",
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "M. Zhang",
      role: "Professional",
      text: "I am a super successful professional on the surface but I am full of self-doubt and rather unsure beneath the surface. A couple of times a year, I noticed I would hit a low tide – something only I would know and over the years I mastered the art of hiding my emotions and feelings. JaGoCoach helped me handle myself and I am a very different person in my own approach and how I handle myself. In short, I have learnt through multiple interactions with JaGoCoach on how to handle myself and enjoy life.",
    },
  ];


   return (
     <section className="relative w-full py-16 px-4 md:px-20 bg-white h-[90vh]">
      {/* Watermark Heading */}
      <h1
        className="testimonial-heading absolute top-4 left-4 md:top-8 md:left-20 text-[2.3rem] md:text-[7rem] font-bold text-transparent leading-none select-none z-0"
        style={{ WebkitTextStroke: "1.5px rgba(0,0,0,0.40)" }}
      >
        Testimonials
      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        speed={1000}
        className="relative z-10 md:top-40 pt-36 md:pt-40 pb-22 min-h-[75vh] md:min-h-[53vh] "
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-12 px-2 md:px-0">
              {/* Image */}
              <div className="flex-shrink-0 w-full max-w-[280px] md:max-w-[280px] mx-auto md:mx-0">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[280px] md:h-[340px] object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Text */}
              <div className="text-gray-800 max-w-full md:max-w-[600px] text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold">{t.name}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{t.role}</p>
               <p className="text-[1.4vh] md:text-base leading-relaxed">
  {t.text.split(" ").slice(0, 70).join(" ")}
  <span className="md:hidden">...</span>
</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;

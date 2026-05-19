const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'pages', 'Home.jsx');
let content = fs.readFileSync(file, 'utf8');

const startMarker = '        {/* Full-width Background Image Carousel */}';
const endMarker = '      </section>';
const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker, startIdx) + endMarker.length;

if (startIdx === -1) {
  console.log('Could not find start marker');
  process.exit(1);
}

const newHero = `        {/* Right-side Background Image Carousel */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-[55%] h-full z-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={heroSlides[currentSlide]}
                alt="Annora Pharma"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left Side: Solid Green Block */}
        <div className="absolute left-0 inset-y-0 w-full md:w-[45%] bg-[#0e7065] z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20 xl:px-24 pt-[100px] lg:pt-[120px] pb-10">

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center max-w-xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-left"
            >
              <h1 className="font-heading font-semibold text-white text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[1.1] tracking-[-0.01em]">
                THE PROMISE OF A <br /> HEALTHIER <span className="text-[#a8e6cf]">WORLD</span>.
              </h1>
            </motion.div>
          </div>

          {/* Bottom Subtitle & Carousel Indicators */}
          <div className="flex flex-col items-start border-t border-white/20 pt-6 mt-8 relative z-10">
            <div className="flex items-center gap-2 mb-4">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={\`Go to slide \${i + 1}\`}
                  className={\`h-[3px] transition-all duration-300 \${i === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'}\`}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white/85 text-[13px] lg:text-[14px] font-sans leading-relaxed max-w-sm"
            >
              Marketing and supply of best-in-class branded generic medicine — transforming lives through affordable medication.
            </motion.p>
          </div>
        </div>
      </section>`;

content = content.substring(0, startIdx) + newHero + content.substring(endIdx);

fs.writeFileSync(file, content, 'utf8');
console.log('Hero restored: solid green block + image split-screen!');

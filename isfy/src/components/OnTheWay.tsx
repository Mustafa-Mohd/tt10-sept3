import React from "react";
import { motion } from "framer-motion";

export default function OnTheWay() {
  // Animation settings
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 },
  };

  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      variants={fadeInUp}
    >
      <h4 className="text-2xl font-bold text-[#6b8cbb] mb-8">2) On the way</h4>
      <div className="bg-[#f5f2ed] rounded-3xl p-8">
        <p className="text-lg text-gray-700 mb-8">
          These titles are still stretching, yawning, and deciding when to make
          their grand entrance. Think of them as literary sneak peeks—half dream,
          half deadline.
        </p>

        <div className="space-y-16">
          {/* Book 1 */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 items-center"
            variants={fadeInUp}
            transition={{ duration: 0.9 }}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img
                    src="/assets/kill.jpg"
                    alt="To Kill His Heartbeat - Love Hurts (Beautifully)"
                    className="w-full max-h-[28rem] object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-6xl">💔</div>
                  <div className="absolute bottom-4 left-4 text-4xl">✨</div>
                  <div className="absolute top-1/2 left-1/4 text-3xl">💕</div>
                </div>

                <div className="relative z-10">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🗓️ COMING 2027
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    To Kill His Heartbeat
                  </h3>

                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    Love Hurts (Beautifully)
                  </p>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    A love story that seduces you sweetly… then leaves you
                    emotionally wrecked in the final chapter. You'll fall in
                    love, cry a little, and question your taste in fictional men.
                    Again.
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      💔 Romance
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      📚 Fiction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Book 2 */}
          <motion.div
            className="flex flex-col lg:flex-row-reverse gap-8 items-center"
            variants={fadeInUp}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img
                    src="/assets/Life.jpg"
                    alt="Life, Pain & Heal - Feel Everything"
                    className="w-full max-h-[28rem] object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-6xl">🌀</div>
                  <div className="absolute bottom-4 left-4 text-4xl">💫</div>
                  <div className="absolute top-1/2 left-1/4 text-3xl">🌟</div>
                </div>

                <div className="relative z-10">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🗓️ COMING 2028
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    Life, Pain & Heal
                  </h3>

                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    Feel Everything
                  </p>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    Three words. Infinite emotions. This one's a literary
                    rollercoaster—no seat cushions, just raw truths and poetic
                    band-aids. Read it with tissues and tea. Possibly chocolate.
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      🌀 Poetry
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      💫 Healing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Book 3 */}
          <motion.div
            className="flex flex-col lg:flex-row gap-8 items-center"
            variants={fadeInUp}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                  <img
                    src="/assets/Women.jpg"
                    alt="Women - Queens Rise, Shadows Fall"
                    className="w-full max-h-[28rem] object-contain rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-br from-gray-800 to-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-6xl">🕯️</div>
                  <div className="absolute bottom-4 left-4 text-4xl">👑</div>
                  <div className="absolute top-1/2 left-1/4 text-3xl">⚡</div>
                </div>

                <div className="relative z-10">
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
                    🗓️ COMING 2029
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                    Women
                  </h3>

                  <p className="text-lg mb-6 text-white/90 leading-relaxed">
                    Queens Rise, Shadows Fall
                  </p>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    A dark fantasy thriller where women don't just survive—they
                    dominate. Expect shadows, strength, and spine-chilling twists.
                    Warning: may cause sudden bursts of feminist pride and
                    goosebumps.
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      🕯️ Fantasy
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      👑 Thriller
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

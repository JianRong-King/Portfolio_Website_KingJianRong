"use client";

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="grid lg:grid-cols-2 gap-16"
      >
        <div className="space-y-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-gray-300"
          >
            Get in <span className="text-purple-500">touch!</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-300">Phone</p>
              <p className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2">
                +60-126214062
                {/* add icon */}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Email</p>
              <a
                href="kingjianrong3249@gmail.com"
                className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex items-center gap-2"
              >
                kingjianrong3249@gmail.com
                {/* add icon */}
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-gray-300">Active in</p>
              <address className="text-xl not-italic leading-relaxed">
                <h4 className="hover:text-purple-400 m-0 p-0">
                  Kuala Lumpur - Malaysia
                </h4>
                <h4 className="hover:text-purple-400 m-0 p-0">
                  Singapore - Singapore
                </h4>
                {/* add icon */}
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136856.9498729112!2d101.60687721145872!3d3.1425500928602403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0xf4d98e5b2f1c287d!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1735916177510!5m2!1sen!2smy"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </motion.div>
    </section>
  );
};

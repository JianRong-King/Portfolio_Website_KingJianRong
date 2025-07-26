const Experience = [
  {
    id: "-",
    title: "High Achiever Award Scholarship",
    description: "Provided by Monash University Malaysia",
  },
  {
    id: "-",
    title: "Founder Chair Man Scholarship",
    description:
      "Provided by Dato Steve Chong - Austin Height International School",
  },
];

export const Achievement = () => {
  return (
    <section className="text-white py-20 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mr-10 mb-12 md:mb-0">
          <h2 className="text-5xl text-purple-300 sticky top-20 font-serif font-bold">
            Awards & Extra-Ciricular
          </h2>
        </div>

        <div className="md:w-3/4 ">
          {Experience.map((event, idx) => {
            return (
              <div
                key={idx}
                className="mb-16 flex items-start"
              >
                <div className="text-purple-300 font-bold text-5xl mr-6">-</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-justify leading-7">{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

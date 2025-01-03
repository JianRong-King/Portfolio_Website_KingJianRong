const Experience = [
  {
    id: "1",
    title: "High Achiever Scholarship",
    description: "By A-levels results",
  },
  {
    id: "2",
    title: "Founder Chair Man Scholarship",
    description: "With excellent extraciricular and academic result",
  },
  {
    id: "3",
    title: "District Basketball Champion",
    description: "With excellent extraciricular and academic result",
  },
  {
    id: "4",
    title: "ISR",
    description: "With excellent extraciricular and academic result",
  },
  {
    id: "5",
    title: "Prefect Head Of Disciplinary",
    description: "With excellent extraciricular and academic result",
  },
  {
    id: "6",
    title: "lmao",
    description: "With excellent extraciricular and academic result",
  },
];

export const Achievement = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mr-10 mb-12 md:mb-0">
          <h2 className="text-5xl text-purple-300 sticky top-20 font-serif font-bold">
            Experience
          </h2>
        </div>

        <div className="md:w-3/4 ">
          {Experience.map((event) => {
            return (
              <div
                key={event.id}
                className="mb-16 flex items-start"
              >
                <div className="text-purple-300 font-bold text-5xl mr-6">
                  {event.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

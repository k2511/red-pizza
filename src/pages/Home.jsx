import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Welcome to RedPizza!</h2>
        <p className="text-gray-600">
          The best pizzas in town, fresh out of the oven 🍕🔥
        </p>
      </section>
    </div>
  );
}

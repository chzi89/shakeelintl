export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="text-center text-blue-900 ">
        <h1 className="text-5xl font-bold">
          Premium Himalayan Pink Salt Expoter 
        </h1>

        <p className="mt-4 text-xll font-medium">
          Authentic, handcrafted pink salt products for wellness and decor, deliverd globally. Experience the natural benefits of Himalayan pink salt with us.
        </p>
      </div>
    </section>
  );
}
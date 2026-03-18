import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div>

      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-[40vh] relative">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          alt="restaurant"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">
            About Our Restaurant
          </h1>
        </div>
      </div>

      {/* Story Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold mb-6 text-center">
          Our Story
        </h2>

        <p className="text-gray-600 leading-relaxed text-center">
          Foodies Restaurant was created with the vision of providing
          delicious food and a warm dining experience for everyone.
          Our chefs use fresh ingredients and traditional cooking
          techniques to prepare meals that are both tasty and healthy.
          Whether you are visiting with family, friends or colleagues,
          we ensure a memorable dining experience.
        </p>

      </section>

      {/* Owner Section */}
      <section className="bg-gray-100 py-12">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

          <img
            src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8"
            alt="chef"
            className="rounded-xl shadow-lg"
          />

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Meet Our Chef
            </h2>

            <p className="text-gray-600">
              Our head chef, Mr. Sharma, has over 15 years of experience
              in culinary arts. His passion for cooking and creativity
              brings unique flavors to every dish served in our restaurant.
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              🍲 Fresh Ingredients
            </h3>
            <p className="text-gray-600">
              We use only fresh and high quality ingredients.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              👨‍🍳 Expert Chefs
            </h3>
            <p className="text-gray-600">
              Our chefs bring years of culinary experience.
            </p>
          </div>

          <div className="p-6 shadow-lg rounded-xl">
            <h3 className="text-xl font-semibold mb-2">
              🏡 Cozy Atmosphere
            </h3>
            <p className="text-gray-600">
              Perfect place for family dinners and celebrations.
            </p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbar/>
            {/* Restaurant Image Slider */}
            <div className="w-full h-[50vh]">

                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >

                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                            className="w-full h-[50vh] object-cover"
                            alt="restaurant"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                            className="w-full h-[50vh] object-cover"
                            alt="restaurant"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
                            className="w-full h-[50vh] object-cover"
                            alt="food"
                        />
                    </SwiperSlide>

                </Swiper>

            </div>

            {/* Restaurant Intro Section */}
            <section className="max-w-6xl mx-auto px-6 py-12 text-center">

                <h1 className="text-3xl font-bold mb-4">
                    Welcome to Foodies Restaurant
                </h1>

                <p className="text-gray-600 leading-relaxed">
                    Foodies Restaurant is a place where delicious food meets a warm and
                    friendly atmosphere. We serve fresh and high quality dishes prepared
                    by experienced chefs. Our restaurant is perfect for family dinners,
                    celebrations and casual dining.
                </p>

                <div className="mt-8 grid md:grid-cols-3 gap-6">

                    <div>
                        <h3 className="font-semibold text-lg">📍 Location</h3>
                        <p className="text-gray-600">Main Market, City Center</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">👨‍🍳 Owner</h3>
                        <p className="text-gray-600">Mr. Sharma</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">⏰ Opening Time</h3>
                        <p className="text-gray-600">10:00 AM - 11:00 PM</p>
                    </div>

                </div>

            </section>

            {/* Popular Dishes Slider */}
            <section className="max-w-6xl mx-auto px-6 pb-16">

                <h2 className="text-2xl font-bold mb-8 text-center">
                    Popular Dishes
                </h2>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >

                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                                className="w-full h-48 object-cover"
                                alt="dish"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Pizza</h3>
                                <p className="text-gray-500">Delicious cheesy pizza</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1550547660-d9450f859349"
                                className="w-full h-48 object-cover"
                                alt="dish"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Burger</h3>
                                <p className="text-gray-500">Juicy grilled burger</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuCoVh3OBePwpx7zK-8dMckA8EOtq-ReX1UQ&s"
                                className="w-full h-48 object-cover"
                                alt="dish"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">Pasta</h3>
                                <p className="text-gray-500">Creamy Italian pasta</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </section>
            <Footer/>

        </div>
    );
}

export default Home;
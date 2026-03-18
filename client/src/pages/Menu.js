import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const foods = [
    {
        id: 1,
        name: "Pizza",
        price: 250,
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
    },
    {
        id: 2,
        name: "Burger",
        price: 150,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    },
    {
        id: 3,
        name: "Pasta",
        price: 200,
        image: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_rp_50_assets&w=740&q=80"
    },
    {
        id: 4,
        name: "Biryani",
        price: 220,
        image:"https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani-5.jpg"
    }
];

function Menu() {

    const [quantity, setQuantity] = useState({});

    const handleChange = (id, value) => {
        setQuantity({
            ...quantity,
            [id]: value
        });
    };

    return (
        <div>
            <Navbar/>
            <div className="max-w-7xl mx-auto px-6 py-12">

                <h1 className="text-3xl font-bold text-center mb-10">
                    Our Menu
                </h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {foods.map((food) => {

                        const qty = quantity[food.id] || 1;
                        const total = qty * food.price;

                        return (

                            <div
                                key={food.id}
                                className="bg-white shadow-lg rounded-xl overflow-hidden"
                            >

                                <img
                                    src={food.image}
                                    className="w-full h-48 object-cover"
                                    alt={food.name}
                                />

                                <div className="p-4">

                                    <h2 className="text-xl font-bold">
                                        {food.name}
                                    </h2>

                                    <p className="text-gray-600">
                                        Price: ₹{food.price}
                                    </p>

                                    {/* Quantity */}
                                    <div className="mt-3">

                                        <label className="text-sm">
                                            Quantity:
                                        </label>

                                        <input
                                            type="number"
                                            min="1"
                                            value={qty}
                                            onChange={(e) =>
                                                handleChange(food.id, Number(e.target.value))
                                            }
                                            className="border ml-2 w-16 p-1 rounded"
                                        />

                                    </div>

                                    {/* Total Price */}
                                    <p className="mt-2 font-semibold">
                                        Total: ₹{total}
                                    </p>

                                    {/* Order Button */}
                                    <button
                                        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                    >
                                        Order
                                    </button>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </div>
            <Footer/>

        </div>
    );
}

export default Menu;
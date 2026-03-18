import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tables = [
  {
    id: 1,
    name: "Couple Table",
    capacity: "2 People",
    price: 200,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
  },
  {
    id: 2,
    name: "Family Table",
    capacity: "4 People",
    price: 350,
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c"
  },
  {
    id: 3,
    name: "Group Table",
    capacity: "6 People",
    price: 500,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
  },
  {
    id: 4,
    name: "VIP Table",
    capacity: "8 People",
    price: 800,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
  }
];

function TableBooking() {

  const [booking, setBooking] = useState({});

  const handleChange = (id, field, value) => {
    setBooking({
      ...booking,
      [id]: {
        ...booking[id],
        [field]: value
      }
    });
  };

  return (
    <div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-3xl font-bold text-center mb-10">
          Book Your Table
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tables.map((table) => {

            const data = booking[table.id] || {};
            const qty = data.qty || 1;
            const total = qty * table.price;

            return (

              <div
                key={table.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >

                <img
                  src={table.image}
                  alt={table.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">

                  <h2 className="text-xl font-bold">
                    {table.name}
                  </h2>

                  <p className="text-gray-600">
                    Capacity: {table.capacity}
                  </p>

                  <p className="text-gray-600">
                    Booking Charge: ₹{table.price}
                  </p>

                  {/* Date */}
                  <div className="mt-3">
                    <label className="text-sm">Date</label>
                    <input
                      type="date"
                      className="border w-full p-2 rounded mt-1"
                      onChange={(e) =>
                        handleChange(table.id, "date", e.target.value)
                      }
                    />
                  </div>

                  {/* Time */}
                  <div className="mt-3">
                    <label className="text-sm">Time</label>
                    <input
                      type="time"
                      className="border w-full p-2 rounded mt-1"
                      onChange={(e) =>
                        handleChange(table.id, "time", e.target.value)
                      }
                    />
                  </div>

                  {/* Quantity */}
                  <div className="mt-3">
                    <label className="text-sm">Tables</label>
                    <input
                      type="number"
                      min="1"
                      value={qty}
                      onChange={(e) =>
                        handleChange(table.id, "qty", Number(e.target.value))
                      }
                      className="border ml-2 w-20 p-1 rounded"
                    />
                  </div>

                  {/* Total */}
                  <p className="mt-2 font-semibold">
                    Total Cost: ₹{total}
                  </p>

                  {/* Button */}
                  <button className="mt-3 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
                    Book Table
                  </button>

                </div>

              </div>

            );
          })}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default TableBooking;
import React from "react";

const ClientProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[300px] relative bottom-16 left-8">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">First Name :</label>
            <input
              type="text"
              placeholder="Mohammed"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700">Last Name :</label>
            <input
              type="text"
              placeholder="Khan"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700">Role :</label>
            <select className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl">
              <option>Photographer</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Work Experience :</label>
            <input
              type="text"
              placeholder="15 years"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700">Location :</label>
            <select className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl">
              <option>Doha, Qatar</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Contact :</label>
            <input
              type="text"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700">Show your best work :</label>
            <div className="mt-1 p-10 w-full  border-2 rounded-2xl flex items-center justify-center border-green-400 bg-white">
              <span>Select file</span>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Description :</label>
            <textarea
              className="mt-1 p-3 w-full border rounded-2xl shadow-sm"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700">Price Range / day :</label>
            <input
              type="text"
              placeholder="$850"
              className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-xl"
            />
          </div>
          <div>
            <label className="block text-gray-700">
              Availability for Events :
            </label>
            <button className="mt-1 p-3 w-[270px] border rounded-full drop-shadow-x">
              Book your slots here <span className="text-[#24c690]">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative top-72 right-[500px]">
        <button className="bg-[#24c690] text-white py-2 px-16 rounded-full shadow-lg ">
          Save
        </button>
      </div>
    </div>
  );
};

export default ClientProfile;

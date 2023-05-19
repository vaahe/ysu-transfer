import React from "react";

export function Transfer({ transferTokens, tokenSymbol }) {
  const handleChange = (e) => {
    console.log(typeof e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const to = formData.get("to");
    const amount = Number(formData.get("amount"));

    if (to && amount) {
      transferTokens(to, amount);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="block text-sm font-medium text-gray-900 dark:text-white">
          Amount of {tokenSymbol}
        </label>
        <input
          className="bg-gray-100 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          step="1"
          name="amount"
          placeholder="1"
          required
        // onChange={handleChange}
        />
      </div>
      <div className="form-group mt-4">
        <div className="mb-6">
          <label htmlFor="address" className="block text-sm font-medium text-gray-900 dark:text-white">
            Recipient address
          </label>
          <input type="text" id="address" className="bg-gray-100 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
      </div>
      <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
    </form>
  );
}
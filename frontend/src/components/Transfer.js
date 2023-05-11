import React from "react";

export function Transfer({ transferTokens, tokenSymbol }) {
  const handleChange = (e) => {
    console.log(typeof e.target.value);
  }

  return (
    <div className="border">
      <h1>Transfer</h1>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const to = formData.get("to");
          const amount = Number(formData.get("amount"));

          if (to && amount) {
            transferTokens(to, amount);
          }
          console.log(typeof amount);
        }}
      >
        <div className="form-group border">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group border">
          <label>Recipient address</label>
          <input className="form-control" type="text" name="to" required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer" />
        </div>
      </form>
    </div>
  );
}

const mongoose = require("mongoose");
const useSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  cpf: { type: String, required: true, unique: true },
  phone: { type: String, required: true, trim: true },
  address: {
    street: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    stateOrProvince: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    neighborhood: { type: String, required: true, trim: true },
    zip: { type: String, required: true },
  },
  transactions: { type: String, required: true, trim: true },
  level: { tyoe: Number, required: true },
  birthDate: { type: String, required: true, trim: true },
});
module.exports = mongoose.model("User", useSchema);

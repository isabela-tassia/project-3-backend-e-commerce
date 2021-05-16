const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },

  phone: { type: String, required: true, trim: true },
  address: {
    city: { type: String, required: true, trim: true },
    stateOrProvince: { type: String, required: true, trim: true },
  },
  level: { tyoe: Number, required: true },
  birthDate: { type: String, required: true, trim: true },
});
module.exports = mongoose.model("User", UserSchema);

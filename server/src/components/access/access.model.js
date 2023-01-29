const { model, Schema } = require("mongoose");

const { hashPassword } = require("../../utils");

const accessSchema = new Schema(
  {
    patient_id: {
      type: String,
      ref: "Patient",
      index: true,
    },
    access_keys: {
      pass_reset: String,
      security_code: String,
      verification: String,
      activation: String,
      totp_secret: Object,
    },
    password: String,
    last_login: Date,
  },
  { timestamps: true }
);

accessSchema.pre("save", function (next) {
  const access = this;

  if (access.isModified("password")) {
    access.password = hashPassword(access.password);
  }

  next();
});

const Access = model("Access", accessSchema);

module.exports = Access;

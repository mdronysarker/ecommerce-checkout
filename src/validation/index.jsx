import * as Yup from "yup";

export const Billing = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("please fill up the name"),
  address: Yup.string().required("please fill up the address"),
  phone: Yup.string()
    .matches(/^\d{11}$/, "Phone number must be 11 digits")
    .required("please fill up the phone"),
  city: Yup.string().required("please fill up the address"),
  house: Yup.string().required("please fill up the house"),
  email: Yup.string()
    .email("Invalid email")
    .required("please fill up the email"),
  number: Yup.string()
    .required("Required")
    .matches(/^\d{3}\s\d{3}\s\d{3}$/, "Invalid card number"),
  expiry: Yup.string()
    .required("Expiry Date is required")
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid Expiry Date (MM/YY format)")
    .test("is-future-date", "card expired", function (value) {
      if (!value) return false;

      const [inputMonth, inputYear] = value.split("/");
      const inputDate = new Date(`20${inputYear}`, inputMonth - 1, 1); // Assuming 20 is the default prefix for years like 'YY'

      return inputDate >= today;
    }),
  cvc: Yup.string()
    .required("Required")
    .matches(/^[0-9]{3,4}$/, "Invalid CVC"),
});

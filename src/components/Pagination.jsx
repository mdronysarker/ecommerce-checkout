import { useContext, useEffect, useState } from "react";

import axios from "axios";

const DonationPagenation = () => {
  const [totalBook, setTotalBook] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getTotalBook")
      .then((res) => setTotalBook(res.data.totalBook))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center mb-32">
      <div className="join mt-7">pagination </div>
    </div>
  );
};

export default DonationPagenation;

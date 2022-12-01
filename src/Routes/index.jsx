import React, { useState } from "react";
import HomePage from "./HomePage";
import AllPages from "./AllPages";

export default function Routes() {
  const [showHome, setShowHome] = useState("false");
  return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}

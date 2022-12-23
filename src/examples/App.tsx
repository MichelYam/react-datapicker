import React from "react";
import { TextInput } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <TextInput label="Email Address" placeholder="name@example.com" value={undefined} onChange={undefined} helpText={undefined} />
  </div>
);

export default App;

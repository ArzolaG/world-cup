import React from "react";
import { Header, Footer, Info, Features, Players, Stripe } from "./components/index.js";

const App = () => {
    return (
        <div>
            <Header />
            <Stripe />
            <Info />
            <Features />
            <Players />
            <Footer />
        </div>
    );
};

export default App;

import React from "react";
import { Header, Footer, Info, Features, PlayerUpdated, Stripe } from "./components/index.js";

const App = () => {
    return (
        <div>
            <Header />
            <Stripe />
            <Info />
            <Features />
            <PlayerUpdated />
            <Footer />
        </div>
    );
};

export default App;

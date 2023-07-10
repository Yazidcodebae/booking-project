import Layout from "../../global/layout";
import Hero from "./hero";
import Recomendation from "./recomendation";

export default function HomePage() {
    return (
        <>
            <Layout>
                <Hero />
                <Recomendation />
            </Layout>
        </>
    );
}

import Layout from "../../global/layout";
import Hero from "../../hero";
import Recomendation from "../../recomendation";
import WhyUs from "../../whyUs";

export default function HomePage() {
    return (
        <>
            <Layout>
                <Hero />
                <Recomendation />
                <WhyUs />
            </Layout>
        </>
    );
}

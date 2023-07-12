import Footer from "./footer";
import Navigation from "./navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    );
}

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex flex-col min-h-screen mx-auto max-w-[900px] px-4 pt-8">
                <div className="flex-grow">
                    <Header />
                    <main className="my-0 pb-16 pt-5">{children}</main>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
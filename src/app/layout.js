
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Providers } from "./provider";



export const metadata = {
  title: "Nikita Hirani - Graphics Designer and UI/UX Designer",
  description: `Hey there ! , I am Nikita, a graphic and UI/UX designer based in Raipur with a
  passion for creating seamless and delightful user experiences.<br></br> I
  especially enjoy working on design operations and systems that help
  bring order to complexity`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="dark text-foreground bg-background">
        <Providers>
        <Header />
          <main >
            {children}
          </main>
          <Footer />
        </Providers>
        </div>
      </body>
    </html>
  );
}

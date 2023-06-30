import NavBar from "./NavBar";
import Footer from "./Footer";

export default function RepeatComponent({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

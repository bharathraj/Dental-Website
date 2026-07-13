import Navbar from "./components/Navbar"
import FloatingButtons from "./components/FloatingButtons"
import Hero from "./sections/Hero"
import Stats from "./sections/Stats"
import About from "./sections/About"
import Treatments from "./sections/Treatments"
import Technology from "./sections/Technology"
import Doctors from "./sections/Doctors"
import SmileGallery from "./sections/SmileGallery"
import Testimonials from "./sections/Testimonials"
import Insurance from "./sections/Insurance"
import Appointment from "./sections/Appointment"
import FAQ from "./sections/FAQ"
import Blog from "./sections/Blog"
import Footer from "./sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Treatments />
      <Technology />
      <Doctors />
      <SmileGallery />
      <Testimonials />
      <Insurance />
      <Appointment />
      <FAQ />
      <Blog />
      <Footer />
      <FloatingButtons />
    </main>
  )
}

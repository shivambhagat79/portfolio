export default function Navbar() {
  return (
    <nav className="w-screen border-b-2 border-black px-60 py-5">
      <div className="flex justify-between">
        <div className="logo"> Shivam Bhagat</div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

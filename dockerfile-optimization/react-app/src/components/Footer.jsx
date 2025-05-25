export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 text-center text-sm">
      © {new Date().getFullYear()} Docker Pro. Built with ❤️ using React + Tailwind + Vite
    </footer>
  );
}

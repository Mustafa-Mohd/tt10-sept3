import React, { useEffect, useRef, useState } from "react";

export default function BooksDropdownSimple() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        open &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Minimal book list
  const books = [
    { title: "Flying with Words", img: "/assets/bookd.png", href: "#" },
    { title: "Paradise In Blood", img: "/assets/book2.jpg", href: "#" },
    { title: "My Last Love", img: "/assets/book3.jpg", href: "#" },
  ];

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        type="button"
        className="font-cormorant text-lg tracking-wide text-slate-700 hover:text-slate-900 transition-colors duration-300 relative group flex items-center gap-1"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span>Books</span>
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          ref={panelRef}
          className="absolute left-1/2 z-50 mt-3 w-[min(92vw,700px)] -translate-x-1/2 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 border border-slate-200"
          role="menu"
          aria-label="Books menu"
        >
          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <a
                key={book.title}
                href={book.href}
                className="group flex flex-col items-center justify-center p-4 rounded-xl shadow-md bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 hover:shadow-lg transition duration-300"
              >
                <div className="relative h-40 w-28 overflow-hidden rounded-lg">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="mt-3 font-semibold text-slate-800 text-sm text-center">
                  {book.title}
                </h4>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-slate-200 text-center">
            <a
              href="/books"
              className="text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              View All Books →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

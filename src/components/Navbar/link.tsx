export default function Link({
  children,
  url,
}: Readonly<{
  children: React.ReactNode;
  url: string;
}>) {
  return (
    <a
      href={url}
      className="px-6 py-2 mx-2 border-2 transition-all border-black hover:bg-black hover:text-white hover:px-2 hover:py-1"
    >
      {children}
    </a>
  );
}

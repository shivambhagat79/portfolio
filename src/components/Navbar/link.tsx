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
      className="p-4 mx-2 border-transparent border-2 transition-all border-white hover:border-teal-700 hover:p-2"
    >
      {children}
    </a>
  );
}

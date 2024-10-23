import Link from "next/link";

const ClientPage = () => {
  return (
    <div>
      <h1 className="text-7xl">ClientPage</h1>
      <Link href="/about" className="text-2xl">
        about page
      </Link>
    </div>
  );
};
export default ClientPage;

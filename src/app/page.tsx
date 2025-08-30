import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
    Home Page

    <Link href="/about"> Redirect to About Page</Link>
  
    </div>
  );
}

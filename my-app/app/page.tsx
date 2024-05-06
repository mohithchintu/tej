import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 space-y-3">
    <p>Welcome</p>
    <div className="space-x-5">
    <button className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500">
    <Link href='/signin'>Sign In</Link>
    </button>
    <button className="p-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500">
    <Link href='/signup'>Register</Link>
    </button>
    </div>

    </div>
  );
}

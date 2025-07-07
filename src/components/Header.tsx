import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1>배포 테스트입니다.</h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="/" className="block px-4 py-2">
              안녕
            </Link>
          </li>
          <li>
            <Link href="/" className="block px-4 py-2">
              안녕
            </Link>
          </li>
          <li>
            <Link href="/" className="block px-4 py-2">
              안녕
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { Separator } from "@/components/ui/separator";
import { Clock, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className=" bg-primary text-white py-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 h-10">
          <div className="flex items-center gap-3">
            <Link
              href="mailto:dongbaco@gmail.com"
              type="email"
              className="flex items-center gap-2"
            >
              <Mail size={20} />
              <span>dongbaco@gmail.com</span>
            </Link>
            {"/"}
            <Link
              href="tel:+84355569802"
              type="email"
              className="flex items-center gap-2"
            >
              <Phone size={20} />
              <span>(+84) 35 556 9802</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={20} />
            <span>T2 - T7 / 8AM - 17PM</span>
          </div>
        </div>
        <Separator className="mb-3 bg-white" />
        <div className="flex items-center justify-between px-4 h-10">
          <Link href="/">
            <Image src="/logo-white.png" alt="logo" width={142} height={32} />
          </Link>
          <div>
            <Link href="/" className="px-4">
              <span>Home</span>
            </Link>
            <Link href="/" className="px-4">
              <span>Products</span>
            </Link>
            <Link href="/" className="px-4">
              <span>R&D</span>
            </Link>
            <Link href="/" className="px-4">
              <span>About</span>
            </Link>
            <Link href="/" className="px-4">
              <span>Join</span> Us
            </Link>
            <Link href="/" className="px-4">
              <span>Contact</span>
            </Link>
          </div>
          <Button variant="secondary">LIÊN HỆ NGAY</Button>
        </div>
      </div>
    </header>
  );
}

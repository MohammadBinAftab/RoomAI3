'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Paintbrush, LogOut, CreditCard } from 'lucide-react';
import { useSession, signIn, signOut } from 'next-auth/react';

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Link href="/" className="font-bold text-xl">RoomAI</Link>

        <div className="ml-auto flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link href="/pricing">
            <Button variant="ghost">Pricing</Button>
          </Link>

          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session.user?.image || '/placeholder-avatar.jpg'} />
                  <AvatarFallback>{session.user?.name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Paintbrush className="mr-2 h-4 w-4" />
                  <span>Redesign</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Buy Credits</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => signIn('github')}>Login</Button>
          )}
        </div>
      </div>
    </nav>
  );
}

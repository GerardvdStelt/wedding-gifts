import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export interface HeaderProps {

}

export const Header = component$<HeaderProps>((props) => {
  return (
    <header class="sticky top-0 z-20 py-2 bg-pink-500 shadow has-checked:h-dvh">
      <div class="container flex flex-wrap justify-between items-center gap-4">

        <div class="text-4xl text-white font-black uppercase">Logo</div>
        
        {/* links */}
        <nav class="max-sm:size-full not-sm:hidden peer-checked:block" onClick$={() => input.value!.checked = false}>
          <ul class="flex gap-4 max-sm:flex-col max-sm:text-lg">
            <li><Link href="/diensten" class="btn block text-white hover:text-pink-50">For Brides</Link></li>
            <li><Link href="/over-ons" class="btn block text-white hover:text-pink-50">For Guests</Link></li>
            <li><Link href="/inspiratie" class="btn block text-white hover:text-pink-50">Franchise</Link></li>
            <li><Link href="/contact" class="btn block text-white hover:text-pink-50">How it Works</Link></li>
            {/* <li><Link href="/offerte" class="btn btn-outline text-base hover:bg-primary-200 w-full">Offerte aanvragen <HiArrowRightSolid /></Link></li> */}
            
          </ul>
        </nav>

        <div class="flex gap-4">
          <button class="btn elevation btn-outline border-white text-white bg-pink-500 border-2">Sign in</button>
          <button class="btn elevation btn-primary bg-white text-pink-500">Get started</button>
        </div>

      </div>
    </header>
  );
});

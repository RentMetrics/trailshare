'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Trophy, HeadphonesIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center fixed w-full z-50 bg-gray-900/60 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-4xl text-white border-2 border-white px-4 py-1 rounded">TrailShare</span>
          </Link>
          <nav className="hidden md:flex items-center gap-12">
            <Link className="text-xl font-medium text-white hover:text-white/80" href="/">
              Home
            </Link>
            <Link className="text-xl font-medium text-white hover:text-white/80" href="/pricing">
              Pricing
            </Link>
            <Link className="text-xl font-medium text-white hover:text-white/80" href="/about">
              About
            </Link>
            <Link className="text-xl font-medium text-white hover:text-white/80" href="/contact">
              Contact
            </Link>
          </nav>
          <Link href="/vehicles" className="hidden md:inline-flex">
            <Button 
              size="lg" 
              className="bg-[#00B4D8] hover:bg-[#0096B4] text-white text-xl font-medium rounded-lg px-8 py-2"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full min-h-screen relative flex items-end pb-24 justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/wakeboarder_landing.png"
              alt="Hero background - Wakeboarding"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-[900px] mx-auto text-center">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
                Make Waves,<br />Create Memories
              </h1>
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 mb-12">
                <p className="text-xl md:text-2xl text-white max-w-[800px] mx-auto leading-relaxed">
                  From thrilling water sports to off-road adventures and RV getaways, experience the outdoors like never before. Your perfect adventure awaits.
                </p>
              </div>
              <Link href="/vehicles">
                <Button 
                  size="lg" 
                  className="bg-[#00B4D8] hover:bg-[#0096B4] text-white text-xl font-medium rounded-lg px-12 py-4"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="activities" className="w-full py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Popular Activities</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover exciting adventures for every season
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      alt="Mountain Trails"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height={400}
                      src="/images/activities/Utah-ATV-Rentals.png"
                      width={600}
                      quality={90}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Mountain Trails</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Explore rugged terrain with our UTVs
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      alt="Lake Adventures"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height={400}
                      src="/images/activities/BoatWakeSurf.png"
                      width={600}
                      quality={90}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Lake Adventures</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Perfect for fishing and water sports
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      alt="Winter Thrills"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height={400}
                      src="/images/activities/snowmobiling-sandpoint-140A8511-edit-scaled.png"
                      width={600}
                      quality={90}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Winter Thrills</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Experience the excitement of snowmobiling
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="equipment" className="w-full py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Equipment</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Choose from our wide selection of well-maintained equipment for your next adventure.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      alt="Boat"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height={400}
                      src="/images/vehicles/boats/Yamaha_Boats.png"
                      width={600}
                      quality={90}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Boats</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Experience the thrill of water adventures
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      alt="UTV"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height={400}
                      src="/images/vehicles/utvs/SidebySide_RZR.png"
                      width={600}
                      quality={90}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">UTVs</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Conquer any terrain with confidence
                  </p>
                </CardContent>
              </Card>
              <Card className="relative overflow-hidden rounded-xl group hover:shadow-xl transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      alt="Snowmobile"
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      height={400}
                      src="/images/vehicles/snowmobiles/Ski-Doo Summit.png"
                      width={600}
                      quality={90}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Snowmobiles</h3>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Winter adventures await
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We provide top-quality equipment and exceptional service for your outdoor adventures.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00B4D8]">
                  <ShieldCheck className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">Safety First</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  All our equipment is regularly maintained and safety-checked
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00B4D8]">
                  <Trophy className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">Premium Equipment</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Top-of-the-line vehicles from trusted manufacturers
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#00B4D8]">
                  <HeadphonesIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">Expert Support</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  24/7 customer support and expert guidance
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full min-h-[600px] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/UTVwithView.png"
              alt="UTV with scenic view"
              fill
              className="object-cover object-[center_40%] scale-110 brightness-50"
              priority
              sizes="100vw"
            />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="text-5xl font-bold text-white mb-6">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-xl text-white mb-12 max-w-[800px] mx-auto">
                Book your recreational vehicle today and create memories that will last a lifetime. Explore mountains, lakes, forests, and more with our premium fleet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/vehicles">
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="bg-white text-[#1B2537] hover:bg-gray-100 text-lg rounded-md px-12 py-6 border-none"
                  >
                    View Vehicles
                  </Button>
                </Link>
                <Link href="/vehicles">
                  <Button 
                    size="lg" 
                    className="bg-[#00B4D8] hover:bg-[#0096B4] text-white text-lg rounded-md px-12 py-6"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#1B2537] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* TrailShare Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4">TrailShare</h2>
              <p className="text-gray-400 text-lg">
                Premium recreational vehicle rentals for unforgettable outdoor adventures.
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-400 hover:text-white text-lg">
                  Home
                </Link>
                <Link href="/our-fleet" className="text-gray-400 hover:text-white text-lg">
                  Our Fleet
                </Link>
                <Link href="/booking" className="text-gray-400 hover:text-white text-lg">
                  Booking
                </Link>
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <div className="space-y-3 text-gray-400 text-lg">
                <p>123 Adventure Drive</p>
                <p>Outdoor City, CA 92040</p>
                <p>info@trailshare.com</p>
              </div>
            </div>

            {/* Hours Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Hours</h2>
              <div className="space-y-3 text-gray-400 text-lg">
                <p>Monday - Friday: 8am - 6pm</p>
                <p>Saturday: 7am - 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 
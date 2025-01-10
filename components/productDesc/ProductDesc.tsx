import Image from "next/image";

const ProductDesc = () => {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Product description
          </h2>
          <div className="my-8 xl:mb-16 xl:mt-12">
            <Image
              width={140}
              height={100}
              className="w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase.svg"
              alt=""
            />
            <Image
              width={140}
              height={100}
              className="hidden w-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-showcase-dark.svg"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-2xl space-y-6">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              The iMac "M1" 8-Core CPU/8-Core GPU/4 USB-C Shaped Ports (2021)
              model features a 5-nm Apple M1 processor with 8 cores (4
              performance cores and 4 efficiency cores), an 8-core GPU, a
              16-core Neural Engine, 8 GB of onboard RAM, and a 1 TB onboard
              SSD.
            </p>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              This all is housed in a wafer thin aluminum case with flat edges
              that includes a 23.5" 4480x2520, 218 PPI, LED-backlit, "True Tone"
              widescreen "Retina 4.5K" display mounted on a svelte aluminum
              stand. This specific model is offered in the a two-tone Blue
              color. It also has an integrated 1080p FaceTime HD camera, a
              "studio-quality three-mic array" and a "high-fidelity six-speaker
              system" that supports Spatial Audio with Dolby Atmos.
            </p>

            <p className="text-base font-semibold text-gray-900 dark:text-white">
              Key Features and Benefits:
            </p>
            <ul className="list-outside list-disc space-y-4 pl-4 text-base font-normal text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Brilliant 4.5K Retina display:{" "}
                </span>
                see the big picture and all the detailsSee it all in sharp,
                glorious detail on the immersive 24-inch 4.5K Retina display.
                The P3 wide color gamut brings what you're watching to life in
                over a billion colors. Images shine with a brilliant 500 nits of
                brightness. Industry-leading anti-reflective coating delivers
                greater comfort and readability. And True Tone technology
                automatically adjusts the color temperature of your display to
                the ambient light of your environment, for a more natural
                viewing experience. So whether you're editing photos, working on
                presentations, or watching your favorite shows and movies,
                everything looks incredible on iMac.
              </li>
              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  1080p FaceTime HD camera:{" "}
                </span>
                ready for your close-upIt's the best camera system ever in a
                Mac. Double the resolution for higher-quality video calls. A
                larger sensor that captures more light. And the advanced image
                signal processor (ISP) of M1 greatly improves image quality. So
                from collaborating with coworkers to catching up with friends
                and family, you'll always look your best.
              </li>

              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Studio-quality mics for high-quality conversations:{" "}
                </span>
                whether you're on a video call with a friend, cutting a track,
                or recording a podcast, the microphones on iMac make sure you
                come through loud, crisp, and clear. The studio-quality
                three-mic array is designed to reduce feedback, so conversations
                flow more naturally and you interrupt each other less. And
                beamforming technology helps the mics ignore background noise.
                Which means everyone hears you - not what's going on around you.
              </li>

              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  Six-speaker sound system: audio that really fills a room:{" "}
                </span>
                the sound system on iMac brings incredible, room-filling audio
                to any space. Two pairs of force-canceling woofers create rich,
                deep bass without unwanted vibrations. And each pair is balanced
                with a high-performance tweeter. The result is a massive,
                detailed soundstage that takes your movies, music, and more to
                the next level.
              </li>

              <li>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {" "}
                  M1 chip: with great power comes great capability:{" "}
                </span>
                M1 is the most powerful chip Apple has ever made. macOS Big Sur
                is an advanced desktop operating system. Combined, they take
                iMac to entirely new levels of performance, efficiency, and
                security. iMac wakes from sleep almost instantly, apps launch in
                a flash, and the whole system feels fluid, smooth, and snappy.
                With up to 85 percent faster CPU performance and up to two times
                faster graphics performance than standard 21.5-inch iMac models,
                you can use apps like Xcode and Affinity Photo to compile code
                in a fraction of the time or edit photos in real time. And it
                runs cool and quiet even while tackling these intense workloads.
                That's the power of hardware, software, and silicon - all
                designed together.
              </li>
            </ul>
          </div>

          <div className="mx-auto mb-6 max-w-3xl space-y-6 md:mb-12">
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Connectivity includes two Thunderbolt / USB 4 ports and two USB 3
              ports (all with a USB-C connector), a 3.5 mm headphone jack
              conveniently mounted on the left edge of the display, Wi-Fi 6
              (802.11ax), and Bluetooth 5.0.
            </p>

            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              A-Grade/CR: iMacs are in 9/10 Cosmetic Condition and are 100%
              Fully Functional. iMacs will be shipped in generic packaging and
              will contain generic accessories. 90 Days Seller Warranty
              Included. iMacs may show signs of wear like scratches, scuffs and
              minor dents.
            </p>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="mb-2 mr-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;

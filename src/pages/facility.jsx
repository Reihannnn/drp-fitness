import allInOne from "/image/facility/all-in-one.jpg";
import dumble_area from "/image/facility/dumblee.jpg";
import bench_press from "/image/facility/bench-press.jpg";
import cardio_machine from "/image/facility/cardio.jpg";
import back_machine from "/image/facility/back.jpg";

const Facility = () => {
  return (
    <section class="py-16 px-4 bg-gray-900 text-white" id="facility">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold mb-12 text-center"> Fasilitas Gym</h2>

        <div class="grid grid-cols-4 grid-rows-2 gap-4">
          {/* <!-- Big image on the left --> */}
          <div class="col-span-2 row-span-2 relative rounded-xl overflow-hidden">
            <img
              src={bench_press}
              alt="Main Facility"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 class="text-lg font-semibold">
                Bench Press Smith Machine
              </h3>
            </div>
          </div>

          {/* <!-- Top right 2 images (vertical stacked) --> */}
          <div class="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
            <img
              src={allInOne}
              alt="Machine Area"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 class="text-sm font-semibold">Machine Zone</h3>
            </div>
          </div>

          <div class="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
            <img
              src={cardio_machine}
              alt="Cardio Area"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 class="text-sm font-semibold">Cardio Zone</h3>
            </div>
          </div>

          {/* <!-- Bottom right 2 images (side-by-side) --> */}
          <div class="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
            <img
              src={back_machine}
              alt="Yoga Room"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 class="text-sm font-semibold">Back Machine</h3>
            </div>
          </div>

          <div class="col-span-1 row-span-1 relative rounded-xl overflow-hidden">
            <img
              src={dumble_area}
              alt="Dumbbell Area"
              class="w-full h-full object-cover"
            />
            <div class="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/80 to-transparent w-full">
              <h3 class="text-sm font-semibold">Weights & Dumbbells</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;

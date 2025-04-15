import HeadphonesCard from "@/components/headphones-card"
import PlaysCard from "@/components/plays-card"
import CreateCard from "@/components/create-card"

export default function SonicCardsLayout() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] w-full mx-auto">
      {/* First Card - Person with headphones (tall card on left) */}
      <div className="md:row-span-2 h-[500px]">
        <div className="h-full">
          <HeadphonesCard />
        </div>
      </div>

      {/* Right column with two cards stacked */}
      <div className="grid grid-rows-2 gap-4 h-[500px]">
        {/* Second Card - Abstract background with 350M+ */}
        <div>
          <PlaysCard />
        </div>

        {/* Third Card - Green create your universe */}
        <div>
          <CreateCard />
        </div>
      </div>
    </div>
  )
}

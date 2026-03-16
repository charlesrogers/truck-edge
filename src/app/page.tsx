import { Truck, TrendingDown, Shield, Search } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[20px] font-bold">Dashboard</h1>
        <p className="text-[12px] text-muted-foreground">Used vehicle deal finder — underpriced trucks with no red flags</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Truck className="size-3.5" />
            Listings Tracked
          </div>
          <p className="mt-1 text-[20px] font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <TrendingDown className="size-3.5" />
            Deals Found
          </div>
          <p className="mt-1 text-[20px] font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Shield className="size-3.5" />
            Red Flags Caught
          </div>
          <p className="mt-1 text-[20px] font-bold">0</p>
        </div>
        <div className="rounded-xl border bg-card p-4 shadow-sm shadow-black/[0.04]">
          <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
            <Search className="size-3.5" />
            Saved Searches
          </div>
          <p className="mt-1 text-[20px] font-bold">0</p>
        </div>
      </div>

      {/* Top Deals */}
      <div className="rounded-xl border bg-card shadow-sm shadow-black/[0.04]">
        <div className="border-b px-4 py-3">
          <h2 className="text-[15px] font-semibold">Top Deals Today</h2>
          <p className="text-[11px] text-muted-foreground">Boise metro area</p>
        </div>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Truck className="size-8 text-muted-foreground/30" />
          <p className="mt-3 text-[13px] font-medium text-muted-foreground">No deals yet</p>
          <p className="mt-1 text-[12px] text-muted-foreground/70">Configure your search to start tracking listings</p>
        </div>
      </div>

      {/* Two-column: Market Overview + Saved Searches */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border bg-card shadow-sm shadow-black/[0.04]">
          <div className="border-b px-4 py-3">
            <h2 className="text-[15px] font-semibold">Market Overview</h2>
            <p className="text-[11px] text-muted-foreground">Median prices by model</p>
          </div>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <TrendingDown className="size-6 text-muted-foreground/30" />
            <p className="mt-2 text-[12px] text-muted-foreground">Collecting price data...</p>
          </div>
        </div>

        <div className="rounded-xl border bg-card shadow-sm shadow-black/[0.04]">
          <div className="border-b px-4 py-3">
            <h2 className="text-[15px] font-semibold">Watched Models</h2>
            <p className="text-[11px] text-muted-foreground">F-150, Tacoma, Tundra, 4Runner, Silverado, Sierra, RAM 1500</p>
          </div>
          <div className="divide-y">
            {["F-150", "Tacoma", "Tundra", "4Runner", "Silverado", "Sierra", "RAM 1500"].map((model) => (
              <div key={model} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
                <span className="font-medium">{model}</span>
                <span className="text-[11px] text-muted-foreground">0 listings</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import * as Icons from "lucide-react"

const IngredientsTooltip = ({ ingredients }) => (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-30 w-56 bg-white shadow-xl rounded-xl p-3 text-left pointer-events-none">
        <p className="text-xs font-semibold text-zinc-800 mb-2">Ingredients</p>
        <ul className="space-y-1.5">
            {ingredients.map((ing, i) => {
                const Icon = Icons[ing.icon] || Icons.Circle
                return (
                    <li key={i} className="flex items-center gap-2 text-xs text-zinc-600">
                        <Icon size={14} className="text-orange-500 shrink-0" />
                        <span>{ing.name}</span>
                    </li>
                )
            })}
        </ul>
    </div>
)

export default IngredientsTooltip
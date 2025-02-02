import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface ShapeToolProps {
    onClick:() => void;
    icon: LucideIcon | IconType;
    iconClassName?: string;
};

export const ShapeTool =({
    onClick,
    icon: Icon,
    iconClassName
}: ShapeToolProps) => {
    return (
        <button className="aspect-square border rounded-mdp-5" onClick={onClick}>
            <Icon className={cn("h-full w-full", iconClassName)}/>
        </button>
    )
}
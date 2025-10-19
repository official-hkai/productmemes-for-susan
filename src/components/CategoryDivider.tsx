import { Hash } from "lucide-react";

interface CategoryDividerProps {
  category: string;
}

const categoryColors: Record<string, string> = {
  "基础大模型": "from-purple-400 to-blue-400",
  "图像模型": "from-pink-400 to-pink-600"
};

const CategoryDivider = ({ category }: CategoryDividerProps) => {
  const gradientClass = categoryColors[category] || "from-gray-400 to-gray-600";

  return (
    <div className="my-8 flex items-center justify-center gap-3">
      <div className={`bg-gradient-to-r ${gradientClass} p-2 rounded-lg`}>
        <Hash className="w-5 h-5 text-white" strokeWidth={2.5} />
      </div>
      <h2 className="text-lg font-semibold text-foreground">
        {category}
      </h2>
    </div>
  );
};

export default CategoryDivider;
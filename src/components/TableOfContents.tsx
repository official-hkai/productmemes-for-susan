import { useEffect, useState } from "react";

interface TableOfContentsProps {
  items: {
    id: string;
    title: string;
    category: string;
  }[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const categories = ["基础大模型", "图像模型"];

  return (
    <aside className="hidden xl:block fixed right-8 top-32 w-64">
      <nav className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4">
        <h2 className="text-sm font-semibold text-foreground mb-3 px-2">目录</h2>
        <div className="space-y-4">
          {categories.map((category) => {
            const categoryItems = items.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;
            
            return (
              <div key={category}>
                <h3 className="text-xs font-semibold text-foreground/60 mb-2 px-2">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {categoryItems.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => handleClick(e, item.id)}
                          className={`block text-xs py-2 px-2 rounded-md transition-all ${
                            isActive
                              ? "bg-primary/10 text-primary font-medium border-l-2 border-primary pl-3"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <span className="line-clamp-2">{item.title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default TableOfContents;

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  details: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  const [showAll, setShowAll] = useState(false);
  
  // 将2025-03-24及以前的内容作为历史更新
  const cutoffDate = "2025-03-24";
  const recentItems = items.filter(item => item.date > cutoffDate);
  const historicalItems = items.filter(item => item.date <= cutoffDate);
  
  const displayItems = showAll ? items : recentItems;

  return (
    <div className="relative pl-4">
      {displayItems.map((item, index) => (
        <div key={index} className="relative pb-10 last:pb-0">
          {/* 连接线 */}
          {index !== displayItems.length - 1 && (
            <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-border" />
          )}
          
          {/* 时间轴圆点 */}
          <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-primary ring-4 ring-background border-2 border-primary" />

          <div className="pl-6">
            {/* 时间和标题 */}
            <div className="mb-2">
              <div className="text-sm font-medium text-primary">{item.date}</div>
              <h3 className="text-base font-semibold text-foreground mt-1">{item.title}</h3>
            </div>

            {/* 详情 */}
            <div className="bg-muted/30 rounded-lg p-4 border border-border">
              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm text-foreground/90 leading-relaxed flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="flex-1">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      
      {/* 展开/折叠按钮 */}
      {historicalItems.length > 0 && (
        <div className="pl-6 pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            {showAll ? (
              <>
                <ChevronUp className="w-4 h-4" />
                收起
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                查看更多
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;

interface ArticleCardProps {
  icon: string;
  productName: string;
  title: string;
  date: string;
  content?: string;
  subtitles?: string[];
  id?: string;
  children?: React.ReactNode;
}

const ArticleCard = ({ icon, productName, title, date, content, subtitles = [], id, children }: ArticleCardProps) => {
  const paragraphs = content ? content.split('\n').filter(p => p.trim()) : [];

  return (
    <article id={id} className="border-b border-border pb-12 mb-12 last:border-b-0 scroll-mt-6">
      <div className="flex items-start gap-3 mb-6">
        <div className="flex flex-col items-center gap-1 flex-shrink-0 -ml-[72px] w-16">
          <img 
            src={icon} 
            alt={productName} 
            className="w-12 h-12 rounded-lg object-cover"
          />
          <span className="text-xs text-muted-foreground text-center">{productName}</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>
      
      {children ? (
        <div>{children}</div>
      ) : (
        <div className="prose prose-slate max-w-none">
          {(() => {
            let subtitleCounter = 0;
            return paragraphs.map((paragraph, index) => {
              const trimmed = paragraph.trim();
              
              // 检查是否是小标题
              if (subtitles.includes(trimmed)) {
                subtitleCounter++;
                const numberPrefix = String(subtitleCounter).padStart(2, '0');
                return (
                  <h3 key={index} className="text-lg font-semibold text-foreground mt-6 mb-3">
                    {numberPrefix} {trimmed}
                  </h3>
                );
              }
              
              // 处理列表项
              if (trimmed.startsWith('-')) {
                return (
                  <li key={index} className="text-foreground/90 ml-6 mb-2 list-disc">
                    {trimmed.substring(1).trim()}
                  </li>
                );
              }
              
              // 处理普通段落
              return (
                <p key={index} className="text-foreground/90 mb-4 leading-relaxed">
                  {trimmed.replace(/\*\*/g, '')}
                </p>
              );
            });
          })()}
        </div>
      )}
    </article>
  );
};

export default ArticleCard;

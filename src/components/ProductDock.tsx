import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface Product {
  name: string;
  icon: string;
  count: number;
  id: string;
  category?: string;
}

// 为每个产品定义主色调
const productColors: Record<string, string> = {
  'qwen-updates': 'rgba(125, 80, 255, 0.1)', // 紫色
  'chatgpt-updates': 'rgba(16, 163, 127, 0.1)', // 青绿色
  'gemini-updates': 'rgba(66, 133, 244, 0.1)', // 蓝色
  'flow-updates': 'rgba(255, 107, 107, 0.1)', // 红色
  'claude-updates': 'rgba(204, 147, 99, 0.1)', // 橙棕色
  'metaso-updates': 'rgba(59, 130, 246, 0.1)', // 天蓝色
  'deepseek-updates': 'rgba(66, 133, 244, 0.1)', // 蓝色
  'wenxin-updates': 'rgba(10, 81, 195, 0.1)', // 深蓝色
  'pixel-updates': 'rgba(66, 133, 244, 0.1)', // 谷歌蓝
  'liblibai-updates': 'rgba(139, 92, 246, 0.1)', // 紫色
};

interface ProductDockProps {
  products: Product[];
}

export function ProductDock({ products }: ProductDockProps) {
  return (
    <div className="relative mb-12">
      <nav className="p-4">
        <Dock className="items-end pb-3 bg-transparent border-0 flex-wrap justify-center max-w-full">
          {products.map((product, index) => {
            const previousCategory = index > 0 ? products[index - 1].category : null;
            const showDivider = index > 0 && previousCategory !== product.category;
            
            return (
              <div key={product.id} className="flex items-center">
                {showDivider && (
                  <div className="h-12 w-px bg-border/70 mx-4" />
                )}
                <a
                  href={`#${product.id}`}
                  className="group"
                >
                  <DockItem 
                    className="aspect-square rounded-full shadow-lg w-12 h-12 md:w-12 md:h-12 transition-all duration-300 hover:scale-125 hover:shadow-xl backdrop-blur-md border border-white/20"
                    style={{
                      backgroundColor: productColors[product.id] || 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <DockLabel>{product.name}</DockLabel>
                    <DockIcon>
                      <img 
                        src={product.icon} 
                        alt={product.name}
                        className={`w-full h-full p-2 object-contain ${
                          ['flow-updates', 'pixel-updates', 'liblibai-updates'].includes(product.id) 
                            ? 'rounded-full object-cover' 
                            : ''
                        }`}
                      />
                    </DockIcon>
                    <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gray-700 text-white text-[10px] font-semibold flex items-center justify-center shadow-md">
                      {product.count}
                    </span>
                  </DockItem>
                </a>
              </div>
            );
          })}
        </Dock>
      </nav>
    </div>
  );
}

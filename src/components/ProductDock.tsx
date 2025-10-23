import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface Product {
  name: string;
  icon: string;
  count: number;
  id: string;
  category?: string;
}

interface ProductDockProps {
  products: Product[];
}

const getProductColor = (productId: string): string => {
  const colorMap: Record<string, string> = {
    'gpt-updates': 'rgba(116, 195, 194, 0.1)',
    'claude-updates': 'rgba(204, 157, 126, 0.1)',
    'gemini-updates': 'rgba(138, 180, 248, 0.1)',
    'deepseek-updates': 'rgba(59, 130, 246, 0.1)',
    'qwen-updates': 'rgba(99, 102, 241, 0.1)',
    'flow-updates': 'rgba(255, 107, 107, 0.1)',
    'metaso-updates': 'rgba(59, 130, 246, 0.1)',
    'pixel-updates': 'rgba(66, 133, 244, 0.1)',
    'wenxin-updates': 'rgba(35, 164, 251, 0.1)',
    'liblibai-updates': 'rgba(168, 85, 247, 0.1)',
  };
  return colorMap[productId] || 'rgba(255, 255, 255, 0.1)';
};

export function ProductDock({ products }: ProductDockProps) {
  return (
    <div className="relative mb-12">
      <nav className="p-4">
        <Dock className="items-end pb-3 bg-transparent border-0">
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
                    className="aspect-square rounded-full shadow-lg w-12 h-12 transition-all duration-300 hover:scale-125 hover:shadow-xl backdrop-blur-sm"
                    style={{
                      backgroundColor: getProductColor(product.id)
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
                    <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full text-white text-[10px] font-semibold flex items-center justify-center shadow-md" style={{ backgroundColor: '#A60000' }}>
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

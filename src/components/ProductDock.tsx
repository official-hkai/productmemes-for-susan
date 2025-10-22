import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';

interface ProductDockProps {
  products: {
    name: string;
    icon: string;
    count: number;
    id: string;
  }[];
}

export function ProductDock({ products }: ProductDockProps) {
  return (
    <div className="relative mb-12">
      <nav className="p-4">
        <Dock className="items-end pb-3 bg-transparent border-0">
          {products.map((product) => (
            <a
              key={product.id}
              href={`#${product.id}`}
              className="group"
            >
              <DockItem className="aspect-square rounded-full bg-white shadow-lg w-12 h-12 transition-all duration-300 hover:scale-125 hover:shadow-xl">
                <DockLabel>{product.name}</DockLabel>
                <DockIcon>
                  <img 
                    src={product.icon} 
                    alt={product.name}
                    className="w-full h-full p-2 object-contain"
                  />
                </DockIcon>
                <span className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-gray-700 text-white text-[10px] font-semibold flex items-center justify-center shadow-md">
                  {product.count}
                </span>
              </DockItem>
            </a>
          ))}
        </Dock>
      </nav>
    </div>
  );
}

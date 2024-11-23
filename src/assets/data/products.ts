export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  brand: string;
  category: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 3200000,
    originalPrice: 3800000,
    image: "https://via.placeholder.com/300",
    brand: "Nike",
    category: "Running",
    description:
      "Giày thể thao Nike Air Max 270 với công nghệ đệm Air độc quyền, mang lại cảm giác thoải mái và năng động cho người sử dụng.",
  },
  {
    id: 2,
    name: "Adidas Ultraboost 21",
    price: 4200000,
    originalPrice: 4800000,
    image: "https://via.placeholder.com/300",
    brand: "Adidas",
    category: "Running",
    description:
      "Giày chạy bộ Adidas Ultraboost với công nghệ đệm Boost tiên tiến, thiết kế hiện đại và êm ái.",
  },
  {
    id: 3,
    name: "Nike Jordan 1 High",
    price: 5200000,
    originalPrice: 5800000,
    image: "https://via.placeholder.com/300",
    brand: "Nike",
    category: "Basketball",
    description:
      "Giày bóng rổ Nike Jordan 1 High phiên bản cao cổ, thiết kế đẳng cấp và mang tính biểu tượng.",
  },
  {
    id: 4,
    name: "Puma RS-X",
    price: 2800000,
    originalPrice: 3200000,
    image: "https://via.placeholder.com/300",
    brand: "Puma",
    category: "Lifestyle",
    description:
      "Giày sneaker Puma RS-X với thiết kế chunky retro, phong cách thời trang đường phố nổi bật.",
  },
];

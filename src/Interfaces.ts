export interface IProductProps {
    name: string;
    category: string;
    image: IProductImage;
    description: string;
}

export interface IProductImage{
    src: string;
    width: number;
    height: number;
}
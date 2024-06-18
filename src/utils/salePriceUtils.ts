

export const SalePriceFunction = () => {

    const calculateSalePrice = (price: number, discount: number) => {
        return price - (price * (discount / 100));
    };

    return {calculateSalePrice}
}
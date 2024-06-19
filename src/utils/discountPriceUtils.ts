

export const discountPriceFunction = () => {

    const calculateDiscountPrice = (price: number, discount: number) => {
        return Math.round(price - (price * (discount / 100)));
    };

    return {calculateDiscountPrice}
}
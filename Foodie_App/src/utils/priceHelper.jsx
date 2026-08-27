export const calculateTotal = (items) => {
    return items.reduce (
        (sum, item) => sum + item.price *item.qty,
    0
);
}

 export const formatPrice = (num) => {
    return `${num.toFixed(2)}`;
}

export default function applyDiscount(total, percent) {
    return total -(total * percent) / 100;
}
import applyDiscount from "../utils/priceHelper";
import {calculateTotal, formatPrice} from "../utils/priceHelper"

function CartsSummary({cart}) {

    const total  = calculateTotal(cart);
    const finalPrice = applyDiscount(total, 10);
  return (
    <div>


<h2>Total : ₹{formatPrice(finalPrice)}</h2>


    </div>
  )
}

export default CartsSummary;
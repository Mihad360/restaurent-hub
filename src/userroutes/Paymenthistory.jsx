import usePayment from "../hooks/usePayment";

const Paymenthistory = () => {

    const [payments] = usePayment()
    console.log(payments)

    return (
        <div className="">
      <div>
        <h1 className="text-center text-3xl font-bold text-amber-600 pt-5">
          Your Payment History
        </h1>
        <div className="bg-gray-200 rounded-lg p-5 mt-6">
          <div>
            {
              payments.length === 0 ? <p className="text-black text-2xl font-semibold text-center py-6">Empty</p> : <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base">
                    <th>Email</th>
                    <th>Transaction Id</th>
                    <th>Total price</th>
                    <th>Payment date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {payments.slice().reverse().map((item) => (
                    <tr key={item._id}>
                      <td>
                        <h1>{item.email}</h1>
                      </td>
                      <td className="text-base font-semibold">{item.transactionId}</td>
                      <td className="text-base font-bold text-amber-600">
                        {item.price}
                      </td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
    );
};

export default Paymenthistory;
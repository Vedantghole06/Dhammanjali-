
import { useState } from "react"

export default function DonationForm() {
    const [selectedAmount, setSelectedAmount] = useState(1000)
    const [customAmount, setCustomAmount] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("test")
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comment: "",
        agreeToTerms: false,
    })

    const predefinedAmounts = [1000, 2500, 5000, 10000, 25000]

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount)
        setCustomAmount("")
    }

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value)
        setSelectedAmount(0)
    }

    const handleInputChange = (e) => {
        const { name, value, type } = e
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? (e).checked : value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const donationAmount = customAmount ? Number.parseInt(customAmount) : selectedAmount
        console.log("Donation submitted:", {
            amount: donationAmount,
            paymentMethod,
            ...formData,
        })
        // Here you would typically handle the payment processing
    }

    return (
        <div className="max-w-2xl mx-auto p-4 bg-[#fdf8f3]">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold mb-4">Your Donation</h2>
                    <div className="border-t border-gray-200 pt-4">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-[#ff9800] text-white font-bold">₹</div>
                            <div className="ml-auto">
                                <button type="button" className="bg-[#ff9800] text-white px-4 py-2" onClick={() => setCustomAmount("")}>
                                    Custom Amount
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                            {predefinedAmounts.map((amount) => (
                                <button
                                    key={amount}
                                    type="button"
                                    className={`py-2 px-4 border ${selectedAmount === amount && !customAmount
                                            ? "bg-[#ff9800] text-white border-[#ff9800]"
                                            : "bg-transparent border-gray-300 hover:border-[#ff9800]"
                                        }`}
                                    onClick={() => handleAmountSelect(amount)}
                                >
                                    {amount}
                                </button>
                            ))}
                        </div>

                        {customAmount && (
                            <div className="mt-4">
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-full p-2 border border-gray-300 focus:border-[#ff9800] outline-none"
                                    placeholder="Enter custom amount"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
                    <div className="border-t border-gray-200 pt-4 flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="test"
                                checked={paymentMethod === "test"}
                                onChange={() => setPaymentMethod("test")}
                                className="accent-[#ff9800]"
                            />
                            <span>Test Donation</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="offline"
                                checked={paymentMethod === "offline"}
                                onChange={() => setPaymentMethod("offline")}
                                className="accent-[#ff9800]"
                            />
                            <span>Offline Donation</span>
                        </label>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Personal Info</h2>
                    <div className="border-t border-gray-200 pt-4 space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name"
                                className="p-3 border border-gray-300 w-full"
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="p-3 border border-gray-300 w-full"
                                required
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your Email"
                            className="p-3 border border-gray-300 w-full"
                            required
                        />
                        <textarea
                            name="comment"
                            value={formData.comment}
                            onChange={handleInputChange}
                            placeholder="Leave A Comment..."
                            className="p-3 border border-gray-300 w-full h-24 resize-none"
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        className="mr-2 accent-[#ff9800]"
                        required
                    />
                    <label>Agree To Terms?</label>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <span className="font-bold">Donation Total:</span>
                        <span className="ml-2">₹{customAmount ? customAmount : selectedAmount}</span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-white border border-[#ff9800] text-[#ff9800] hover:bg-[#fff8e1] font-medium"
                >
                    Donate now
                </button>
            </form>
        </div>
    )
}

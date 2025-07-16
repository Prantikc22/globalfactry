const InventoryLogisticsPage = () => {
  return (
    <div>
      {/* Breadcrumb Navigation */}
      <section className="pt-28 pb-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Services
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Inventory Logistics
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl font-semibold">Inventory Logistics</h1>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Streamline Your Inventory Management</h2>
              <p className="text-gray-700">
                Efficient inventory logistics is crucial for a successful supply chain. We offer comprehensive solutions
                to optimize your inventory levels, reduce costs, and improve order fulfillment.
              </p>
              <ul className="list-disc pl-5 mt-4">
                <li>Real-time inventory tracking</li>
                <li>Demand forecasting</li>
                <li>Warehouse management</li>
                <li>Order fulfillment</li>
              </ul>
            </div>
            <div>
              <img
                src="https://via.placeholder.com/500x300" // Replace with your actual image URL
                alt="Inventory Logistics"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-700">
                Monitor your inventory levels in real-time with our advanced tracking system.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Demand Forecasting</h3>
              <p className="text-gray-700">
                Predict future demand and optimize your inventory levels to avoid stockouts and overstocking.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Warehouse Management</h3>
              <p className="text-gray-700">
                Efficiently manage your warehouse operations with our comprehensive warehouse management system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Optimize Your Inventory Logistics?</h2>
          <p className="text-gray-700 mb-6">Contact us today to learn more about our inventory logistics solutions.</p>
          <a href="/contact" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default InventoryLogisticsPage

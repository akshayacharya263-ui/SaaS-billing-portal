import React from "react";

function Dashboard() {

  const plans = [
    {
      name: "Starter",
      price: "₹199",
      color: "#3b82f6",
      features: [
        "1 User",
        "Basic Analytics",
        "Email Support"
      ]
    },

    {
      name: "Pro",
      price: "₹599",
      color: "#8b5cf6",
      features: [
        "5 Users",
        "Advanced Analytics",
        "Priority Support"
      ]
    },

    {
      name: "Enterprise",
      price: "₹1499",
      color: "#10b981",
      features: [
        "Unlimited Users",
        "Full Reports",
        "24/7 Dedicated Support"
      ]
    }
  ];

  const handleBuy = (plan) => {
    alert(plan.name + " Plan Purchased Successfully");
  };

  return (

    <div className="dashboard">

      {/* Navbar */}

      <div className="navbar">

        <h2 className="logo">
          SaaS Portal
        </h2>

        <div className="nav-links">
          <span>Dashboard</span>
          <span>Billing</span>
          <span>Reports</span>
          <span>Profile</span>
        </div>

      </div>

      {/* Hero Section */}

      <div className="hero">

        <h1>
          Modern SaaS Billing Platform
        </h1>

        <p>
          Manage subscriptions, billing, analytics and payments
          in one secure platform.
        </p>

      </div>

      {/* Cards */}

      <div className="card-container">

        {plans.map((plan, index) => (

          <div className="card" key={index}>

            <h2 style={{ color: plan.color }}>
              {plan.name}
            </h2>

            <h1 className="price">
              {plan.price}
            </h1>

            <div className="features">

              {plan.features.map((item, i) => (
                <p key={i}>✔ {item}</p>
              ))}

            </div>

            <button
              className="buy-btn"
              style={{ backgroundColor: plan.color }}
              onClick={() => handleBuy(plan)}
            >
              Buy Now
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "9.99",
    credits: "100",
    features: [
      "100 AI generations",
      "Basic room styles",
      "24/7 support",
      "Export in HD"
    ]
  },
  {
    name: "Pro",
    price: "19.99",
    credits: "250",
    features: [
      "250 AI generations",
      "Advanced room styles",
      "Priority support",
      "Export in 4K",
      "Custom prompts"
    ]
  },
  {
    name: "Enterprise",
    price: "49.99",
    credits: "1000",
    features: [
      "1000 AI generations",
      "All room styles",
      "Dedicated support",
      "Export in 8K",
      "API access",
      "Custom branding"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Simple, transparent pricing</h1>
        <p className="text-xl text-muted-foreground">Choose the plan that's right for you</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="mb-6 text-muted-foreground">{plan.credits} credits included</p>
            <Button className="w-full mb-8">Get Started</Button>
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
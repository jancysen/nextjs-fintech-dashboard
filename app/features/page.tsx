const features = [
  "Fast Payments",
  "Expense Tracking",
  "Secure Transactions",
];

export const dynamic = "force-static";

export default function FeaturesPage() {
  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Features (SSG)
      </h2>

      <ul className="list-disc ml-6">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </main>
  );
}

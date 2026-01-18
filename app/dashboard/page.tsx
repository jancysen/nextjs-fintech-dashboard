type Transaction = {
  id: number;
  title: string;
  amount: number;
};

async function getTransactions(): Promise<Transaction[]> {
  return [
    { id: 1, title: "Food", amount: 250 },
    { id: 2, title: "Travel", amount: 1200 },
    { id: 3, title: "Shopping", amount: 540 },
  ];
}

export default async function DashboardPage() {
  const transactions = await getTransactions();

  return (
    <main className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Recent Transactions (SSR)
      </h2>

      <ul className="space-y-2">
        {transactions.map((txn) => (
          <li key={txn.id} className="border p-3 rounded">
            {txn.title} — ₹{txn.amount}
          </li>
        ))}
      </ul>
    </main>
  );
}

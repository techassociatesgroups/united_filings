
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const EligibilitySection = () => {
  const oldRegime = [
    { range: "Up to Rs. 2,50,000", rate: "Nil" },
    { range: "Rs. 2,50,001 to Rs. 5,00,000", rate: "5%" },
    { range: "Rs. 5,00,001 to Rs. 10,00,000", rate: "20%" },
    { range: "Above Rs. 10,00,000", rate: "30%" },
  ];

  const newRegime = [
    { range: "Up to 4,00,000", rate: "NIL" },
    { range: "4,00,001 - 8,00,000", rate: "5%" },
    { range: "8,00,001 - 12,00,000", rate: "10%" },
    { range: "12,00,001 - 16,00,000", rate: "15%" },
    { range: "16,00,001 - 20,00,000", rate: "20%" },
    { range: "20,00,001 - 24,00,000", rate: "25%" },
    { range: "Above 24,00,000", rate: "30%" },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Eligibility for Income Tax efiling in India</h2>
      <p className="text-gray-600 mb-6">
        In India, the obligation to do ITR online filing arises under certain conditions. Primarily, if your gross total income exceeds the basic exemption limits, you're required to e-file your return - and the limits vary based on your age and the tax regime chosen.
      </p>
      <p className="text-gray-600 mb-6">
        A tax regime refers to the structure under which your income is taxed. As of the latest updates, taxpayers can opt for either the Old Tax Regime, which allows various deductions and exemptions, or the New Tax Regime, which offers reduced slab rates but restricts most deductions.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-2">Old Tax Regime</h3>
        <p className="text-gray-600 mb-4">
            The following criteria apply to the old tax regime: Individuals under 60 years: Rs 2.5 lakh; Individuals between 60 and 80 years: Rs 3.0 lakh; Individuals over 80 years: Rs 5.0 lakh. In the table below, we have provided the income tax slab under the old tax regime for income tax filing:
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Income Range</TableHead>
              <TableHead>Income Tax Slab Rates</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {oldRegime.map(row => (
              <TableRow key={row.range}>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">New Tax Regime</h3>
        <p className="text-gray-600 mb-4">
            The Union Budget 2025 introduced significant changes to the income tax slabs under the New Tax Regime. Below, we have provided the updated income tax slabs for the New Tax Regime for income tax filing.
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Income Range (Rs.)</TableHead>
              <TableHead>Tax Rate (%)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newRegime.map(row => (
              <TableRow key={row.range}>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <p className="text-gray-600 mb-4">
            However, there are other specific circumstances that require you to file ITR, even if your income is below these thresholds:
        </p>
        <h4 className="font-semibold text-lg text-gray-800 mb-2">High-value Transactions:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Deposited Rs 1 crore or more in one or more current bank accounts.</li>
            <li>Deposited Rs 50 lakh or more in one or more savings bank accounts.</li>
            <li>Spent over Rs 2 lakh on foreign travel.</li>
            <li>Incurred electricity expenses exceeding Rs 1 lakh during the financial year.</li>
            <li>Had TDS (Tax Deducted at Source) or TCS (Tax Collected at Source) exceeding Rs 25,000 (or Rs 50,000 for senior citizens).</li>
        </ul>
        <h4 className="font-semibold text-lg text-gray-800 mt-4 mb-2">Business and Professional Income:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Businesses: Mandatory if your total sales, turnover, or gross receipts exceed Rs 60 lakh during the financial year.</li>
            <li>Professionals: Mandatory if gross receipts exceed Rs 10 lakh during the financial year.</li>
        </ul>
      </div>
    </section>
  );
};

export default EligibilitySection;

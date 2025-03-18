import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

const MortgagePortfolioAnalysisForm = () => {
  const [formData, setFormData] = useState({
    // Loan Details
    loanId: '',
    initialLoanAmount: '',
    outstandingBalance: '',
    interestRate: '',
    spread: '',
    isFixedRate: false,
    loanTerm: '',
    maturityDate: '',
    originationDate: '',
    paymentFrequency: 'monthly',
    
    // Payment Status
    isInArrears: false,
    daysPastDue: '',
    inDefaultFlag: false,
    
    // Property Details
    propertyValue: '',
    loanToValue: '',
    propertyType: '',
    propertyLocation: '',
    floodRiskZone: '',
    
    // Borrower Details
    borrowerCreditScore: '',
    borrowerIncome: '',
    borrowerEmploymentStatus: '',
    
    // Economic Indicators
    unemploymentRate: '',
    gdpGrowthRate: '',
    inflationRate: '',
    
    // Additional Risk Factors
    prepaymentRisk: '',
    refinanceIncentive: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Mortgage Portfolio Analysis Form</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Loan Details */}
            <div>
              <Label htmlFor="loanId">Loan ID</Label>
              <Input id="loanId" name="loanId" value={formData.loanId} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="initialLoanAmount">Initial Loan Amount ($)</Label>
              <Input id="initialLoanAmount" name="initialLoanAmount" type="number" value={formData.initialLoanAmount} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="outstandingBalance">Outstanding Balance ($)</Label>
              <Input id="outstandingBalance" name="outstandingBalance" type="number" value={formData.outstandingBalance} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="interestRate">Interest Rate (%)</Label>
              <Input id="interestRate" name="interestRate" type="number" step="0.01" value={formData.interestRate} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="spread">Spread over Index (%)</Label>
              <Input id="spread" name="spread" type="number" step="0.01" value={formData.spread} onChange={handleInputChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="isFixedRate" name="isFixedRate" checked={formData.isFixedRate} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isFixedRate: checked }))} />
              <Label htmlFor="isFixedRate">Fixed Rate</Label>
            </div>
            <div>
              <Label htmlFor="loanTerm">Loan Term (years)</Label>
              <Input id="loanTerm" name="loanTerm" type="number" value={formData.loanTerm} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="maturityDate">Maturity Date</Label>
              <Input id="maturityDate" name="maturityDate" type="date" value={formData.maturityDate} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="originationDate">Origination Date</Label>
              <Input id="originationDate" name="originationDate" type="date" value={formData.originationDate} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="paymentFrequency">Payment Frequency</Label>
              <select id="paymentFrequency" name="paymentFrequency" value={formData.paymentFrequency} onChange={handleInputChange} className="w-full p-2 border rounded">
                <option value="monthly">Monthly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>

            {/* Payment Status */}
            <div className="flex items-center space-x-2">
              <Checkbox id="isInArrears" name="isInArrears" checked={formData.isInArrears} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isInArrears: checked }))} />
              <Label htmlFor="isInArrears">Is in Arrears</Label>
            </div>
            <div>
              <Label htmlFor="daysPastDue">Days Past Due</Label>
              <Input id="daysPastDue" name="daysPastDue" type="number" value={formData.daysPastDue} onChange={handleInputChange} />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="inDefaultFlag" name="inDefaultFlag" checked={formData.inDefaultFlag} onCheckedChange={(checked) => setFormData(prev => ({ ...prev, inDefaultFlag: checked }))} />
              <Label htmlFor="inDefaultFlag">In Default</Label>
            </div>

            {/* Property Details */}
            <div>
              <Label htmlFor="propertyValue">Property Value ($)</Label>
              <Input id="propertyValue" name="propertyValue" type="number" value={formData.propertyValue} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="loanToValue">Loan to Value (%)</Label>
              <Input id="loanToValue" name="loanToValue" type="number" step="0.01" value={formData.loanToValue} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="propertyType">Property Type</Label>
              <Input id="propertyType" name="propertyType" value={formData.propertyType} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="propertyLocation">Property Location</Label>
              <Input id="propertyLocation" name="propertyLocation" value={formData.propertyLocation} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="floodRiskZone">Flood Risk Zone</Label>
              <Input id="floodRiskZone" name="floodRiskZone" value={formData.floodRiskZone} onChange={handleInputChange} />
            </div>

            {/* Borrower Details */}
            <div>
              <Label htmlFor="borrowerCreditScore">Borrower Credit Score</Label>
              <Input id="borrowerCreditScore" name="borrowerCreditScore" type="number" value={formData.borrowerCreditScore} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="borrowerIncome">Borrower Income ($)</Label>
              <Input id="borrowerIncome" name="borrowerIncome" type="number" value={formData.borrowerIncome} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="borrowerEmploymentStatus">Borrower Employment Status</Label>
              <Input id="borrowerEmploymentStatus" name="borrowerEmploymentStatus" value={formData.borrowerEmploymentStatus} onChange={handleInputChange} />
            </div>

            {/* Economic Indicators */}
            <div>
              <Label htmlFor="unemploymentRate">Unemployment Rate (%)</Label>
              <Input id="unemploymentRate" name="unemploymentRate" type="number" step="0.1" value={formData.unemploymentRate} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="gdpGrowthRate">GDP Growth Rate (%)</Label>
              <Input id="gdpGrowthRate" name="gdpGrowthRate" type="number" step="0.1" value={formData.gdpGrowthRate} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="inflationRate">Inflation Rate (%)</Label>
              <Input id="inflationRate" name="inflationRate" type="number" step="0.1" value={formData.inflationRate} onChange={handleInputChange} />
            </div>

            {/* Additional Risk Factors */}
            <div>
              <Label htmlFor="prepaymentRisk">Prepayment Risk (1-10)</Label>
              <Input id="prepaymentRisk" name="prepaymentRisk" type="number" min="1" max="10" value={formData.prepaymentRisk} onChange={handleInputChange} />
            </div>
            <div>
              <Label htmlFor="refinanceIncentive">Refinance Incentive (1-10)</Label>
              <Input id="refinanceIncentive" name="refinanceIncentive" type="number" min="1" max="10" value={formData.refinanceIncentive} onChange={handleInputChange} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>Analyze Mortgage Portfolio</Button>
      </CardFooter>
    </Card>
  );
};

export default MortgagePortfolioAnalysisForm;

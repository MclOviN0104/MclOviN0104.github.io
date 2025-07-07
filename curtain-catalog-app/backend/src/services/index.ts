import { Curtain } from '../models';
import { BudgetCalculator } from '../utils/BudgetCalculator';

export const getCurtains = async () => {
    // Logic to retrieve curtains from the database
    const curtains = await Curtain.findAll();
    return curtains;
};

export const calculateBudget = (width: number, height: number, fabricCost: number, installationCost: number) => {
    const budgetCalculator = new BudgetCalculator();
    return budgetCalculator.calculate(width, height, fabricCost, installationCost);
};
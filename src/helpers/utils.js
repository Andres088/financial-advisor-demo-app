
export function roundToTwoDecimals (num) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
}

const money_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export const formatCurrency = amount => money_formatter.format(amount);
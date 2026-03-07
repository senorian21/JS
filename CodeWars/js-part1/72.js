function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        let interestGained = principal * interest;
        let interestAfterTax = interestGained * (1 - tax);
        principal += interestAfterTax;
        years++;
    }
    return years;
}
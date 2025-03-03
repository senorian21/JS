function quarterOf(month) {
    if (month >= 1 && month <= 3) {
        return 1; // First quarter (January to March)
    } else if (month >= 4 && month <= 6) {
        return 2; // Second quarter (April to June)
    } else if (month >= 7 && month <= 9) {
        return 3; // Third quarter (July to September)
    } else if (month >= 10 && month <= 12) {
        return 4; // Fourth quarter (October to December)
    } else {
        return null; // Invalid month
    }
}
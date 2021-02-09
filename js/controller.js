function changeSymbol(index) {
    // if (values[index] < 5) {
    //     values[index]++;
    // } else {
    //     values[index] = 0;
    // }
    values[index] = (values[index] + 1) % 6;
    updateView();
}
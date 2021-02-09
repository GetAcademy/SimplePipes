function changeSymbol(index) {
    // if (values[index] < 5) {
    //     values[index]++;
    // } else {
    //     values[index] = 0;
    // }
    values[index] = (values[index] + 1) % 6;
    updateView();
}

function init() {
    for (var i = 0; i < size*size; i++) {
        values[i] = selectedSymbolIndex;
    }
    updateView();
}
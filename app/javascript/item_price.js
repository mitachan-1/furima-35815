window.addEventListener('load',() => {
    const priceInput = document.getElementById("item-price");
    if (!priceInput){ return false;}
    priceInput.addEventListener("input", () => {
        const inputValue = priceInput.value;

        const addTaxDom = document.getElementById("add-tax-price");
        addTaxDom.innerHTML = (Math.floor(inputValue*0.1));

        const profitNum = document.getElementById("profit"); 
        resultNum = inputValue*0.1;
        profitNum.innerHTML = (Math.floor(inputValue-resultNum));
    })
    
});
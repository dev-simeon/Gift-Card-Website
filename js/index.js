let select = document.querySelector("#select");
let giftCardsWrapper = document.querySelector("#giftCards");
let country = document.querySelector("#country");
let cardType = document.querySelector("#cardType");
let amount = document.querySelector("#amount");
let caculateRate = document.querySelector("#caculateRate");
let sellRate = document.querySelector("#sellRate");
let sellRateText = document.querySelector(".sell-rate");


let cards = 
[
    {
        cardName: "Visa Giftcard",
        cardAlias: "START CODE: 4034(USA)",
        rate: 509
    },
    {
        cardName: "Vanilla Giftcard",
        cardAlias: "START CODE: 4124(USA)",
        rate: 384
    },    
    {
        cardName: "Walmart Giftcard",
        cardAlias: "Physical Card(USA)",
        rate: 363
    },
    {
        cardName: "Target Giftcard",
        cardAlias: "E-code(USA)",
        rate: -5
    },
    {
        cardName: "Nordstrom Giftcard",
        cardAlias: "Large Card(USA)",
        rate: 498
    },
    {
        cardName: "Sephora Giftcard",
        cardAlias: "E-code(USA)",
        rate: -5
    },
    {
        cardName: "Ebay Giftcard",
        cardAlias: "Physical Card(USA)",
        rate: 425
    },
    {
        cardName: "Nike Giftcard",
        cardAlias: "E-code(USA)",
        rate: -5
    },
    {
        cardName: "Best Buy Giftcard",
        cardAlias: "Large Card(USA)",
        rate: -5
    },
    {
        cardName: "Apple store card Giftcard",
        cardAlias: "E-code(USA)",
        rate: 373
    },
    {
        cardName: "American Express Giftcard",
        cardAlias: "START CODE: 3779(USA)",
        rate: 488
    },
    {
        cardName: "Google Play Giftcard",
        cardAlias: "Physical Card(CANADA)",
        rate: 311
    },
    {
        cardName: "Steam Giftcard",
        cardAlias: "Large Card(European Union)",
        rate: 597
    },
    {
        cardName: "American Express Serve Giftcard",
        cardAlias: "START CODE: 3777(USA)",
        rate: 425
    },
    {
        cardName: "Amazon Giftcard",
        cardAlias: "Physical Card(CANADA)",
        rate: 301
    },
    {
        cardName: "ITunes Giftcard",
        cardAlias: "Physical Card(IRELAND)",
        rate: -5
    },
    {
        cardName: "Razor Gold Giftcard",
        cardAlias: "Physical Card(USA)",
        rate: 566
    },   
    {
        cardName: "Macy Giftcard",
        cardAlias: "Physical Card(USA)",
        rate: 446
    }                                                                                       
];


if(select != null){
    cards.forEach((element,index) => {
        let html =  ` <option value=${index}>${element.cardName}</option>`;
        select.insertAdjacentHTML("beforeend", html);
    
        html = ` <div class="d-flex justify-content-between align-items-center border rounded-pill card-rate px-4 py-3">
                    <div class="d-flex flex-md-fill flex-column flex-md-row ">
                        <p class="mb-1 mb-md-0">${element.cardName}</p>
                        <p class="mb-0 flex-fill text-center fw-bold">${element.cardAlias}</p>
                    </div>
                    <p class="mb-0 fw-bolder">₦${element.rate}</p>
                </div>`
        giftCardsWrapper.insertAdjacentHTML("beforeend", html);
    }); 
    
    
    let selectedCard = [];
    select.addEventListener("change",() => {
        amount.value = "";
        let selectedOption = select.value;
        cards.forEach((element,index) => {
            if(selectedOption == index){
                let cardAlias = element.cardAlias.split("(");
                cardType.value = cardAlias[0];
                let newstring = cardAlias[1];
                let splittedString = newstring.split(")");
                country.value = splittedString[0];
                amount.removeAttribute("disabled")
                selectedCard.push(cards[selectedOption]);
            }
            else if(selectedOption == ""){
                country.value = "";
                cardType.value = "";
                amount.setAttribute("disabled","");
            }
        });
    });

    caculateRate.addEventListener("click",() => {
        sellRateText.classList.remove("d-none");
        selectedCard.forEach(element => {
            if (amount.value != ""){
                sellRate.textContent = "₦ " + caculateSellRate(amount.value,element.rate);
            }
            else {
                alert("please input amount");
                return;
            }
        });
        selectedCard.length = 0;
    });
}


function caculateSellRate(cardAmount,rate) {
    let sellRate;
    sellRate = cardAmount * rate;
    return sellRate;
}





















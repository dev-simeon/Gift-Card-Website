let select = document.querySelector("#select");
let giftCardsWrapper = document.querySelector("#giftCards");
let country = document.querySelector("#country");
let cardType = document.querySelector("#cardType");
let amount = document.querySelector("#amount");
let caculateRate = document.querySelector("#caculateRate");
let sellRate = document.querySelector("#sellRate");
let buyRate = document.querySelector("#buyRate");
let buyRateText = document.querySelector(".buy-rate");
let sellRateText = document.querySelector(".sell-rate");
let rateWrapper = document.querySelector(".rate-wrapper");
let heroSection = document.querySelector(".hero-section");
let navbar = document.querySelector(".navbar");
let brandName = document.querySelector(".navbar-brand");
let menuButton = document.querySelector(".menu path");
let loginBtn = document.querySelector(".login-btn");
let signUpButton = document.querySelector(".sign-up-btn");
let generalSettingsPage = document.querySelector("#general");
let changePasswordPage = document.querySelector("#changePassword");
let bankAccountPage = document.querySelector("#account");
let changePasswordPageButton = document.querySelector(".change-password-btn");
let generalSettingsPageButton = document.querySelector(".general-btn");
let bankAccountPageButton = document.querySelector(".bank-account");
let withdrawal = document.querySelector("#withdraw");
let withdrawalMenu = document.querySelector("#withdrawOffcanvas");
let deposit = document.querySelector("#deposit");
let depositMenu = document.querySelector("#depositOffcanvas");
let chatSnippet = document.querySelectorAll(".chat-snippet");

function navigateToChangePasswordPage() {
    changePasswordPage.classList.remove("d-none");
    changePasswordPageButton.classList.add("active");
    changePasswordPageButton.classList.add("border-3");
    changePasswordPageButton.classList.add("border-bottom");
    generalSettingsPageButton.classList.remove("active");
    generalSettingsPageButton.classList.remove("border-3");
    generalSettingsPageButton.classList.remove("border-bottom");
    generalSettingsPage.classList.add("d-none");
    bankAccountPageButton.classList.remove("active");
    bankAccountPageButton.classList.remove("border-bottom");
    bankAccountPageButton.classList.remove("border-3");
    bankAccountPage.classList.add("d-none");
};

function navigateToGeneralPage() {
    generalSettingsPage.classList.remove("d-none");
    generalSettingsPageButton.classList.add("active");
    generalSettingsPageButton.classList.add("border-3");
    generalSettingsPageButton.classList.add("border-bottom");
    changePasswordPageButton.classList.remove("active");
    changePasswordPageButton.classList.remove("border-bottom");
    changePasswordPageButton.classList.remove("border-3");
    changePasswordPage.classList.add("d-none");
    bankAccountPageButton.classList.remove("active");
    bankAccountPageButton.classList.remove("border-bottom");
    bankAccountPageButton.classList.remove("border-3");
    bankAccountPage.classList.add("d-none");
};

function navigateToBankAccountPage() {
    bankAccountPage.classList.remove("d-none");
    bankAccountPageButton.classList.add("active");
    bankAccountPageButton.classList.add("border-3");
    bankAccountPageButton.classList.add("border-bottom");
    generalSettingsPageButton.classList.remove("active");
    generalSettingsPageButton.classList.remove("border-3");
    generalSettingsPageButton.classList.remove("border-bottom");
    generalSettingsPage.classList.add("d-none");
    changePasswordPageButton.classList.remove("active");
    changePasswordPageButton.classList.remove("border-bottom");
    changePasswordPageButton.classList.remove("border-3");
    changePasswordPage.classList.add("d-none");
};

let cards = 
[
    {
        cardName: "Visa Giftcard",
        cardAlias: "START CODE: 4034(USA)",
        sellRate: 509,
        buyRate: 600
    },
    {
        cardName: "Vanilla Giftcard",
        cardAlias: "START CODE: 4124(USA)",
        sellRate: 384,
        buyRate: 600
    },    
    {
        cardName: "Walmart Giftcard",
        cardAlias: "Physical Card(USA)",
        sellRate: 363,
        buyRate: 600
    },
    {
        cardName: "Target Giftcard",
        cardAlias: "E-code(USA)",
        sellRate: -5,
        buyRate: 600
    },
    {
        cardName: "Nordstrom Giftcard",
        cardAlias: "Large Card(USA)",
        sellRate: 498,
        buyRate: 600
    },
    {
        cardName: "Sephora Giftcard",
        cardAlias: "E-code(USA)",
        sellRate: -5,
        buyRate: 600
    },
    {
        cardName: "Ebay Giftcard",
        cardAlias: "Physical Card(USA)",
        sellRate: 425,
        buyRate: 600
    },
    {
        cardName: "Nike Giftcard",
        cardAlias: "E-code(USA)",
        sellRate: -5,
        buyRate: 600
    },
    {
        cardName: "Best Buy Giftcard",
        cardAlias: "Large Card(USA)",
        sellRate: -5,
        buyRate: 600
    },
    {
        cardName: "Apple store card Giftcard",
        cardAlias: "E-code(USA)",
        sellRate: 373,
        buyRate: 600
    },
    {
        cardName: "American Express Giftcard",
        cardAlias: "START CODE: 3779(USA)",
        sellRate: 488,
        buyRate: 600
    },
    {
        cardName: "Google Play Giftcard",
        cardAlias: "Physical Card(CANADA)",
        sellRate: 311,
        buyRate: 600
    },
    {
        cardName: "Steam Giftcard",
        cardAlias: "Large Card(European Union)",
        sellRate: 597,
        buyRate: 600
    },
    {
        cardName: "American Express Serve Giftcard",
        cardAlias: "START CODE: 3777(USA)",
        sellRate: 425,
        buyRate: 600
    },
    {
        cardName: "Amazon Giftcard",
        cardAlias: "Physical Card(CANADA)",
        sellRate: 301,
        buyRate: 600
    },
    {
        cardName: "ITunes Giftcard",
        cardAlias: "Physical Card(IRELAND)",
        sellRate: -5,
        buyRate: 600
    },
    {
        cardName: "Razor Gold Giftcard",
        cardAlias: "Physical Card(USA)",
        sellRate: 566,
        buyRate: 600
    },   
    {
        cardName: "Macy Giftcard",
        cardAlias: "Physical Card(USA)",
        sellRate: 446,
        buyRate: 600
    }                                                                                       
];


if(select != null){
    cards.forEach((element,index) => {
        let html =  ` <option value=${index}>${element.cardName}</option>`;
        select.insertAdjacentHTML("beforeend", html);
    
        html = ` <div class="d-flex justify-content-between align-items-center border rounded-4 card-rate px-4 py-3">
                    <div class="d-flex flex-md-fill flex-column flex-md-row ">
                        <p class="mb-1 mb-md-0">${element.cardName}</p>
                        <p class="mb-0 flex-fill text-center fw-bold">${element.cardAlias}</p>
                    </div>
                    <p class="mb-0 fw-bolder">₦${element.sellRate}</p>
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
        selectedCard.forEach(element => {
            if (amount.value != ""){
                rateWrapper.classList.remove("d-none");
                sellRateText.classList.remove("d-none");
                buyRateText.classList.remove("d-none");
                sellRate.textContent = "₦ " + caculateSellRate(amount.value,element.sellRate);
                buyRate.textContent = "₦ " + caculateBuyRate(amount.value,element.buyRate);
                selectedCard.length = 0;
            }
            else {
                alert("please input amount");
                return;
            }
        });
       
    });
}

openInnerChat();
window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
        return;
    }
    else {
        openInnerChat();
    }
})


window.addEventListener("scroll",() => {
    changeNavbarAppearance();
});


function caculateSellRate(cardAmount,rate) {
    let sellRate;
    sellRate = cardAmount * rate;
    return sellRate;
}

function caculateBuyRate(cardAmount,rate) {
    let buyRate;
    buyRate = cardAmount * rate;
    return buyRate;
}

function changeNavbarAppearance() {
    if (heroSection.getBoundingClientRect().bottom <= 50) {
        navbar.classList.replace("bg-accent","bg-white");
        navbar.classList.add("shadow-sm");
        brandName.classList.replace("text-primary","text-secondary");
        menuButton.setAttribute("fill","var(--bg-accent)");
        loginBtn.classList.replace("btn-outline-primary","btn-outline-accent");
        signUpButton.classList.replace("btn-accent","btn-primary");
        navLinks.forEach(element => {
            element.classList.remove("text-primary")
            element.style.color = "var(--bg-accent)";
        });
    } 
    else {
        brandName.classList.replace("text-secondary","text-primary");
        navbar.classList.replace("bg-white","bg-accent");
        navbar.classList.remove("shadow-sm");
        menuButton.setAttribute("fill","var(--bg-primary)");
        loginBtn.classList.replace("btn-outline-accent","btn-outline-primary");
        signUpButton.classList.replace("btn-primary","btn-accent")
        navLinks.forEach(element => {
            element.classList.add("text-primary");
        });
    }
};

function openWithdrawalMenu() {
    withdrawalMenu.classList.remove("d-none");
    depositMenu.classList.add("d-none");
};

function openDepositMenu() {
    depositMenu.classList.remove("d-none");
    withdrawalMenu.classList.add("d-none");
};


function openInnerChat() {
    if (window.innerWidth < 768) {
        chatSnippet.forEach(element => {
            element.addEventListener("click", () => {
                window.location.href = "./conversation.html";
            });
        });
    }
    else {
        return;
    }
};

{
    let body = document.querySelector("body");
    let opacityValue = localStorage.getItem("opacityValue") ?? 1;
    
    setInterval(changeOpacticyValue, 5000);
   
    
    function changeOpacticyValue(){
        if(opacityValue > 0){
            opacityValue -= 0.2;
            localStorage.setItem("opacityValue", `${opacityValue}');
            body.style.opacity = opacityValue;
        }
    }
}

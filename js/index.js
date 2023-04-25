// instanciating element
let heroSection = document.querySelector(".hero-section");
let navbar = document.querySelector(".navbar");
let brandName = document.querySelector(".navbar-brand");
let toggleMobileMenuButton = document.querySelector(".menu path");
let loginBtn = document.querySelector(".login-btn");
let signUpButton = document.querySelector(".sign-up-btn");
let generalSettingsPage = document.querySelector("#general");
let changePasswordPage = document.querySelector("#changePassword");
let bankAccountPage = document.querySelector("#account");
let openChangePasswordPage = document.querySelector(".change-password-btn");
let openGeneralSettingsPage = document.querySelector(".general-btn");
let openBankAccountPage = document.querySelector(".bank-account");

// call this function on openChangePasswordPage click
function navigateToChangePasswordPage() {
    // remove d-none class on changePasswordPage
    changePasswordPage.classList.remove("d-none");
    // add active class on openChangePasswordPage
    openChangePasswordPage.classList.add("active");
    // remove active class on openGeneralSettingsPage
    openGeneralSettingsPage.classList.remove("active");
    // add d-none class on generalSettingsPage
    generalSettingsPage.classList.add("d-none");
    // remove active class on openBankAccountPage
    openBankAccountPage.classList.remove("active");
    // add d-none class on bankAccountPage
    bankAccountPage.classList.add("d-none");
};

// call this function on openGeneralSettingsPage click
function navigateToGeneralPage() {
    // remove d-none class on generalSettingsPage
    generalSettingsPage.classList.remove("d-none");
    // add active class on openGeneralSettingsPage
    openGeneralSettingsPage.classList.add("active");
    // remove active class on openChangePasswordPage
    openChangePasswordPage.classList.remove("active");
    // add d-none class on changePasswordPage
    changePasswordPage.classList.add("d-none");
    // remove active class on openBankAccountPage
    openBankAccountPage.classList.remove("active");
    // add d-none class on bankAccountPage
    bankAccountPage.classList.add("d-none");
};

// call this function on openBankAccountPage click
function navigateToBankAccountPage() {
    // remove d-none class on bankAccountPage
    bankAccountPage.classList.remove("d-none");
    // add active class on openBankAccountPage
    openBankAccountPage.classList.add("active");
    // remove active class on openGeneralSettingsPage
    openGeneralSettingsPage.classList.remove("active");
    // add d-none class on generalSettingsPage
    generalSettingsPage.classList.add("d-none");
    // remove active class on openChangePasswordPage
    openChangePasswordPage.classList.remove("active");
    // add d-none class on changePasswordPage
    changePasswordPage.classList.add("d-none");
};

// creating an array of giftCard called cards
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


// initializing element
let select = document.querySelector("#select");
let giftCardsWrapper = document.querySelector("#giftCards");
// check if select element is not null
if (select != null) {
    // if select is not null.
    // loop over the card array
    cards.forEach((element, index) => {
        // assign the item cardName to the select options, using the index of each item as the value.
        // and store it in a variable html.
        let html = `<option value=${index}>${element.cardName}</option>`;
        // populate the select element by inserting the html as the last child of the select element
        select.insertAdjacentHTML("beforeend", html);
        
        // make the item cardName as the textContent of a <P> tag,
        // also the item cardAlias as the textContent of a <P> tag.
        // and store it in a variable html.
        html = ` <div class="d-flex justify-content-between align-items-center border rounded-4 card-rate px-4 py-3">
                    <div class="d-flex flex-md-fill flex-column flex-md-row ">
                        <p class="mb-1 mb-md-0">${element.cardName}</p>
                        <p class="mb-0 flex-fill text-center fw-bold">${element.cardAlias}</p>
                    </div>
                    <p class="mb-0 fw-bolder">₦${element.sellRate}</p>
                </div>`
        // populate the giftCardsWrapper element by inserting the html as the last child of the 
        // giftCardsWrapper element
        giftCardsWrapper.insertAdjacentHTML("beforeend", html);
    }); 
    
    
    let selectedCard = [];
    // add change event listener to the select element
    select.addEventListener("change", () => {
        // assign the element with the id of amount to the variable amount
        let amount = document.querySelector("#amount");
        // set the value of the amount element to empty string
        amount.value = "";
        // assign the value of the select element to the selectedOption variable
        let selectedOption = select.value;
        // loop over the cards array
        cards.forEach((element, index) => {
            // check if the selectedOption is equal to the index of the item in the cards array
            if (selectedOption == index) {
                // split the item cardAlias on "(" which its index correspond with the selectedOption
                // assign it to a variable cardAlias.
                let cardAlias = element.cardAlias.split("(");
                // assign the element with the id of cardType to the variable cardType
                let cardType = document.querySelector("#cardType");
                // cardType value is equal to cardAlias index 0
                cardType.value = cardAlias[0];
                // assign cardAlias with index of 1 to the variable newstring
                let newString = cardAlias[1];
                // assign the value of newString.split(")") to the splittedString variable
                let splittedString = newString.split(")");
                // assign the element with the id of country to the variable country
                let country = document.querySelector("#country");
                // the value of the country element is equal to splittedString index 0
                country.value = splittedString[0];
                // remove the disabled attribute from the amount element
                amount.removeAttribute("disabled")
                // push the item in the cards array with the index of selectedOption to the selectedCard array
                selectedCard.push(cards[selectedOption]);
            }
            // if selectedOption is empty;
            else if (selectedOption == "") {
                // country.value is equal to empty string
                country.value = "";
                // cardType.value is equal to empty string
                cardType.value = "";
                // add disabled attribute to the amount element
                amount.setAttribute("disabled","");
            }
        });
    });

    // initializing element
    let caculateRate = document.querySelector("#caculateRate");
    let sellRate = document.querySelector("#sellRate");
    let buyRate = document.querySelector("#buyRate");
    let rateWrapper = document.querySelector(".rate-wrapper");

    // add click event listener to caculateRate element
    caculateRate.addEventListener("click", () => {
        // loop over the selectedCard array
        selectedCard.forEach(element => {
            // check if amount.value is not equal to empty string
            if (amount.value != "") {
                // remove d-none class from rateWrapper element
                rateWrapper.classList.remove("d-none");
                // assign the return value of caculateSellRate function to sellRate textContent.
                sellRate.textContent = "₦ " + caculateSellRate(amount.value, element.sellRate);
                // assign the return value of the caculateBuyRate function to the buyRate textContent.
                buyRate.textContent = "₦ " + caculateBuyRate(amount.value, element.buyRate);
                // clear the selectedCard array.
                selectedCard.length = 0;
            }
            // if amount.value is equal to empty string
            else {
                // alert this message.
                alert("please input amount");
                return;
            }
        });
    });
}

// check if the innerWidth of the window object is less than 768
if (window.innerWidth < 768) {
    // if true call the openInnerChat method.
    openInnerChat();
};

// add resize event listener on the window object
window.addEventListener("resize", () => {
    // check if the innerWidth of the window object is less than 768
    if (window.innerWidth < 768) {
        // if true call the openInnerChat method.
        openInnerChat();
    }
    // if false return outside from this block of code
    else {
        return;
    }
});


// add scroll event listener on the window object
window.addEventListener("scroll", () => {
    // call the changeNavbarAppearance method on scroll
    changeNavbarAppearance();
});

// function to caculate the giftCard sell rate.
function caculateSellRate(cardAmount, rate) {
    // declare a variable sellRate
    let sellRate;
    // multiply the parameter cardAmount with the parameter rate 
    // then assign it to the sellRate variable
    sellRate = cardAmount * rate;
    // return the value of sellRate
    return sellRate;
};

// function to caculate the giftCard buy rate.
function caculateBuyRate(cardAmount, rate) {
    // declare a variable buyRate
    let buyRate;
    // multiply the parameter cardAmount with the parameter rate
    // then assign it to the buyRate variable
    buyRate = cardAmount * rate;
    // return the value of buyRate
    return buyRate;
};

// function to change the navbar apperance from a particular height
function changeNavbarAppearance() {
    // select all element with the class of .nav-link-lg and assign them to the variable navLinks
    let navLinks = document.querySelectorAll(".nav-link-lg");
    // check if the heroSection element is at a particular location
    if (heroSection.getBoundingClientRect().bottom <= 50) {
        // replace the class of "bg-accent" with the class of "bg-white" on the navbar element
        navbar.classList.replace("bg-accent", "bg-white");
        // add the class of "shadow-sm" to the navbar element
        navbar.classList.add("shadow-sm");
        // replace the class of "text-primary" with the class of "text-secondary" on the brandName element
        brandName.classList.replace("text-primary", "text-secondary");
        // set the attribute of fill to the value of var "(-bg-accent)" on the toggleMobileMenuButton element
        toggleMobileMenuButton.setAttribute("fill", "var(--bg-accent)");
        // replace the class of "btn-outline-primary" with the class of "btn-outline-accent" on the loginBtn element
        loginBtn.classList.replace("btn-outline-primary", "btn-outline-accent");
        // replace the class of "btn-accent" with the class of "btn-primary" on the signUpButton element
        signUpButton.classList.replace("btn-accent", "btn-primary");
        // loop over the navlinks array
        navLinks.forEach(element => {
            // remove the class of "text-primary" on the element in the navlinks array
            element.classList.remove("text-primary")
            // add the value of the color "var(bg-accent)" to the element in the navlinks array
            element.style.color = "var(--bg-accent)";
        });
    } 
    // if the heroSection is not at that location
    else {
        // replace the class "text-secondary" with the class of "text-primary" on the brandName element
        brandName.classList.replace("text-secondary", "text-primary");
        // replace the class "bg-white" with the class of "bg-accent" on the navbar element
        navbar.classList.replace("bg-white", "bg-accent");
        // remove the class of "shadow-sm" from the navbar element
        navbar.classList.remove("shadow-sm");
        // set the attribute of fill to the value of "var(--bg-primary)" on the toggleMobileMenuButton element
        toggleMobileMenuButton.setAttribute("fill", "var(--bg-primary)");
        // replace the class of "btn-outline-accent" with the class of "btn-outline-primary" on the loginBtn element
        loginBtn.classList.replace("btn-outline-accent", "btn-outline-primary");
        // replace the class of "btn-primary" with the class of "btn-accent" on the signUpButton element
        signUpButton.classList.replace("btn-primary", "btn-accent");
        // add the class of "text-primary" on the element in the navlinks array
        navLinks.forEach(element => {
            element.classList.add("text-primary");
        });
    }
};

//intializing elements
let withdrawalMenu = document.querySelector("#withdrawOffcanvas");
let depositMenu = document.querySelector("#depositOffcanvas");

// function to open withdrawal menu
function openWithdrawalMenu() {
    // remove the class of "d-none" on the withdrawalMenu element
    withdrawalMenu.classList.remove("d-none");
    // add the class of "d-none" on the depositMenu element
    depositMenu.classList.add("d-none");
};

// function to open deposit menu
function openDepositMenu() {
    // remove the class of "d-none" on the depositMenu element
    depositMenu.classList.remove("d-none");
    // add the class of "d-none" on the withdrawalMenu element
    withdrawalMenu.classList.add("d-none");
};

// function to open full chat on mobile
function openInnerChat() {
    // select all element with the class of "chat-snippet" and assign them to the variable chatSnippet
    let chatSnippet = document.querySelectorAll(".chat-snippet");
    // loop over the chatSnippet array
    chatSnippet.forEach(element => {
        // add click event listener to the element in the chatSnippet array.
        element.addEventListener("click", () => {
            // on click navigate to the "./conversation.html" url.
            window.location.href = "./conversation.html";
        });
    });
};

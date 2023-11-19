var webDesignsEl = document.querySelector('.portfolio');

const webDesigns = [
    {
        id: 'TerraNovaCounseling',
        title: "Terra Nova Counseling",
        brief: 'DUI Counseling Website',
        description: "Website designed for a counseling company after recieveing DUI's. The main goal for this site was to allow the user to find any and all information they needed for starting thier counseling sessions. To accomplish this goal I needed to be able to display a lot of information while keeping the pages pleasing to the eye to help the user stay focused.", 
        mockupDesc: "Just like all Websites by Mora Designs, Terra Nova Counseling is a adaptable site, tailored to adjust based on screensize. Terra Nova Counseling's site is mainly for displaying information. Therefore, there was not need for an immediate call to action. Instead giving the user the feel of the company with a calming setting and the option to use the nagivation in the header, if needing to find specific information, or to simply scroll on the homepage to see the companies main knowledge.",
        brandDesc: `A company is more than a logo. Creating a full brand for any company will create unity for the entire business. The favicon for Terra Nova counceling references the company name, wher "nova" means moon. Using clean and simple font types was necessary to keep the essence of the company.`,
        mainImg: '../assets/terraNovaWeb.png',
        mockupImg: '../assets/TerraNovaMockup.png',
        brandImg: '../assets/terraNovaBrand-06.png'
    }, 
    {
        id: 'FurrealGroomers',
        title: "Fur-real Groomers",
        brief: 'Pet grooming company Website',
        description: "This site was designed for a pet grooming company. The Target user is young families with one of more pets. One of the main challenges was to keep the deisgn fun wihtout being overstimulating to the reader. Branding patterns and colors were greatly used in this site to help attract the younger demographic.",
        mockupDesc: 'Just like all Websites by Mora Designs, Furreal Groomers is a adaptable site, tailored to adjust based on screensize. Furreal Groomers, needed to give the user an immediate opportunity to book an appointment with them, so the "appointment" action needed to be visible first on any screen.',
        brandDesc: `A company is more than a logo. Creating a full brand for any company will create unity for the entire business. The Favicon for Fur-real Groomers is mora obvious than others. The bone in the favicon and the tail in the logo representing the main customers, and the brush representing the problem being selved by this company: having a place for pets to be cleaned. Since the target audience is younger the colors scheme and fonts were able to have a more playful side to them.`,
        mainImg: '../assets/furrealGroomersProject.png',
        mockupImg: '../assets/furrealMockup.png',
        brandImg: '../assets/furrealBrand-03.png',
    },
    
]

function displayDesigns(desings) {
    for (let i=0; i<desings.length; i++) {
        var eachDesignEl = document.createElement('div');
        webDesignsEl.appendChild(eachDesignEl);
        var designTitleEl = document.createElement('h3');
        eachDesignEl.appendChild(designTitleEl);
        designTitleEl.textContent= desings[i].title;
        var designBriefEl = document.createElement('p');
        webDesignsEl.appendChild(designBriefEl);
        designBriefEl.textContent = desings[i].brief;

    }
}

displayDesigns(webDesigns);
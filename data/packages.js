var packagesEl = document.querySelector('.packages');
var extrasEl = document.querySelector('.extras')

const packages = [
    {
        title: 'Website Package',
        price: '$2500',
        includes: ['Full Website design', 'User Experience Structure', 'Includes 10 pages']
    },
    {
        title: 'Brand Package',
        price: '$1000',
        includes: ['Primary Logo', 'Secondary Logo', 'Submark', 'icon', 'color pallete', 'Pattern']
    },
    {
        title: 'Full Design Package',
        price: '$3000',
        includes: ['Full Website design','User Experience Structure','Primary Logo', 'Secondary Logo', 'Submark', 'icon', 'color pallete', 'Pattern']
    },
    {
        title: 'Landing Page',
        price: '$500',
        includes: ['Landing page design', 'color pallete',]
    },
    {
        title: 'Development Package',
        price: '$5000',
        includes: ['Fully developed Website','User Experience Structure','Primary Logo', 'Secondary Logo', 'Submark', 'icon', 'color pallete', 'pattern']
    },
]


function displayPackages(packages) {
    for (let i=0; i<packages.length; i++) {
        var eachPackage = document.createElement('div');
        packagesEl.appendChild(eachPackage);
        eachPackage.setAttribute('class', 'eachPackage')
        var pTitleEl = document.createElement('h2');
        eachPackage.appendChild(pTitleEl);
        pTitleEl.textContent= packages[i].title;
        var pPrice = document.createElement('h5');
        eachPackage.appendChild(pPrice);
        pPrice.textContent = packages[i].price;
        var pIncludesEl = document.createElement('div')
        eachPackage.appendChild(pIncludesEl)
        for (let j=0; j<packages[i].includes.length; j++) {
            var eachIncludesEl = document.createElement('p');
            pIncludesEl.appendChild(eachIncludesEl);
            eachIncludesEl.textContent = packages[i].includes[j];
            eachIncludesEl.setAttribute('class', 'includesItem')
        }
    }
}

const extras = [
    {
        title: 'Each additional page',
        price: '$100+',
        includes: ['Fully designed pages']
    },
    {
        title: 'Partial Development Website',
        price: '$200-500+',
        includes: ['If your Website needs any special functionality we can add it to your any design package.', 'Price will vary based on severity']
    },
    {
        title: 'On going upkeep',
        price: '$200-600/mo',
        includes: ['price will be decided depending on companies needs']
    }
]

function displayExtras(extras) {
    for (let i=0; i<extras.length; i++){
        var eachExtra = document.createElement('div');
        extrasEl.appendChild(eachExtra);
        eachExtra.setAttribute('class', 'eachPackage')
        var eTitleEl = document.createElement('h2');
        eachExtra.appendChild(eTitleEl);
        eTitleEl.textContent = extras[i].title;
        var ePriceEl = document.createElement('h5');
        eachExtra.appendChild(ePriceEl);
        ePriceEl.textContent = extras[i].price
        var eIncludesEl = document.createElement('div')
        eachExtra.appendChild(eIncludesEl)
        for (let j=0; j<extras[i].includes.length; j++) {
            var exEachIncludesEl = document.createElement('p');
            eIncludesEl.appendChild(exEachIncludesEl);
            exEachIncludesEl.textContent = extras[i].includes[j];
            exEachIncludesEl.setAttribute('class', 'includesItem')
        }
    }

 
};

displayPackages(packages);
displayExtras(extras);
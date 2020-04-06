const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const firstAnchorTag = document.querySelector('nav > a:nth-child(1)')

firstAnchorTag.textContent = siteContent.nav['nav-item-1']



const secondAnchorTag = document.querySelector('nav > a:nth-child(2)')

secondAnchorTag.textContent = siteContent.nav['nav-item-2']



const thirdAnchorTag = document.querySelector('nav > a:nth-child(3)')

thirdAnchorTag.textContent = siteContent.nav['nav-item-3']


const fourthAnchorTag = document.querySelector('nav > a:nth-child(4)')

fourthAnchorTag.textContent = siteContent.nav['nav-item-4']



const fifthAnchorTag = document.querySelector('nav > a:nth-child(5)')

fifthAnchorTag.textContent = siteContent.nav['nav-item-5']

const domIsAwesome1 = document.querySelector('section.cta > div > h1')
domIsAwesome1.textContent = siteContent.cta['h1']

const domIsAwesome2 = document.querySelector('section.cta > div > button')
domIsAwesome2.textContent = siteContent.cta['button']


const topImg = document.getElementById('cta-img')

topImg.src = 'img/header-img.png'


const topContent1 = document.querySelector('section.main-content > div.top-content > div:nth-child(1) > h4')
topContent1.textContent = siteContent['main-content']['features-h4']

const topContentp1 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(1) > p')
topContentp1.textContent = siteContent['main-content']['features-content']

const topContent2 = document.querySelector('section.main-content > div.top-content > div:nth-child(2) > h4')
topContent2.textContent = siteContent['main-content']['about-h4']

const topContentp2 = document.querySelector('body > div > section.main-content > div.top-content > div:nth-child(2) > p')
topContentp2.textContent = siteContent['main-content']['about-content']


const middleImg2 = document.getElementById('middle-img')
middleImg2.src = 'img/mid-page-accent.jpg'

const bottomContent1 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > h4')
bottomContent1.textContent = siteContent['main-content']['services-h4']

const bottomContentp1 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(1) > p')
bottomContentp1.textContent = siteContent['main-content']['services-content']

const bottomContent2 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > h4')
bottomContent2.textContent = siteContent['main-content']['product-h4']

const bottomContentp2 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p')
bottomContentp2.textContent = siteContent['main-content']['product-content']

const bottomContent3 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > h4')
bottomContent3.textContent = siteContent['main-content']['vision-h4']

const bottomContentp3 = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(3) > p')
bottomContentp3.textContent = siteContent['main-content']['vision-content']


const contact = document.querySelector('body > div > section.contact > h4')
contact.textContent = siteContent['contact']['contact-h4']

const contactp1 = document.querySelector('body > div > section.contact > p:nth-child(2)')
contactp1.textContent = siteContent['contact']['address']

const contactp2 = document.querySelector('body > div > section.contact > p:nth-child(3)')
contactp2.textContent = siteContent['contact']['phone']

const contactp3 = document.querySelector('body > div > section.contact > p:nth-child(4)')
contactp3.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')
footer.textContent = siteContent['footer']['copyright']




const nav = document.querySelector('nav')
const newLink = document.createElement('a')
newLink.href = '#contact'
newLink.textContent = 'Contact'
nav.appendChild(newLink)


const newLink2 = document.createElement('a')
newLink2.href = '#stuff'
newLink2.textContent = 'Stuff'
nav.prepend(newLink2)

const links = document.querySelectorAll('a')
function color(){
  for(let i = 0; i < links.length; i++){
    links[i].style.color = 'green'
  }
}
color()
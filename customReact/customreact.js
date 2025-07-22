function customRender(reactElement, container){



const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
    
for(const [attribute,value] of Object.entries(reactElement.props)){
      
    
    console.log(attribute, value)   
    domElement.setAttribute(attribute, value)
}
container.appendChild(domElement)

}

const domElement = document.createElement.children



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',
        title: 'open google',
        style: 'color: red;'

        

    },

    children: 'click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
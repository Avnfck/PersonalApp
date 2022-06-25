const fetchProfile = async () => {
    const response = await fetch('/profile-data')
    const json = await response.json()
    const data = json[0]
    return data
}

const fetchExp = async () => {
    const response = await fetch('/experience-data')
    const json = await response.json()
    return json
}

const fetchStack = async () => {
    const response = await fetch('/stack-data')
    const json = await response.json()
    return json
}

const fetchContact = async () => {
    const response = await fetch('/contact-data')
    const json = await response.json()
    return json
}

if (window.location.href.match(/\/$/)) {
    fetchProfile().then((data) => {
        Object.keys(data).forEach((el, idx) => {
            const createP = document.createElement('p')
            document.querySelector('main').appendChild(createP)
            document.querySelector(`main p:nth-of-type(${idx+1})`).innerText = data[el]
        })
    })   
}

if (window.location.href.match(/\/exp$/)) {
    const btnAttrs = {
        'type': 'button',
        'data-bs-toggle': 'collapse',
        'data-bs-target': '#collapse',
        'aria-expanded': 'false',
        'aria-controls': 'collapse'
    }
    const colapseDivAttrs = {
        'id': 'collapse',
        'aria-labelledby': 'heading',
        'data-bs-parent': '#employers'
    }

    fetchExp().then((data) => {
        data.forEach((el, idx) => {
            const accDiv = document.createElement('div'), collapseDiv = document.createElement('div'), accBodyDiv = document.createElement('div')
            const accHeader = document.createElement('h2')
            const accBtn = document.createElement('button')

            accDiv.classList.add('accordion-item')
            accHeader.classList.add('accordion-header')
            accBtn.classList.add('accordion-button','collapsed')
            collapseDiv.classList.add('accordion-collapse','collapse')
            accBodyDiv.classList.add('accordion-body')

            Object.keys(btnAttrs).forEach((key, keyIndex) => {
                keyIndex == 2 || keyIndex == 4
                ? accBtn.setAttribute(key, `${btnAttrs[key]}${idx+1}`)
                : accBtn.setAttribute(key, btnAttrs[key])
            })
            Object.keys(colapseDivAttrs).forEach((key, keyIndex) => {
                keyIndex < 2
                ? collapseDiv.setAttribute(key, `${colapseDivAttrs[key]}${idx+1}`)
                : collapseDiv.setAttribute(key, colapseDivAttrs[key])
            })
            accHeader.setAttribute('id', `heading${idx+1}`)

            document.querySelector('main #employers').append(accDiv)
            document.querySelector(`.accordion-item:nth-of-type(${idx+1})`).append(accHeader)
            document.querySelector(`.accordion-item:nth-child(${idx+1}) .accordion-header`).append(accBtn)
            document.querySelector(`.accordion-item:nth-child(${idx+1}) button`).innerText = `${data[idx].company}\n${data[idx].job_title}\n${data[idx].employed_date}`
            document.querySelector(`.accordion-item:nth-of-type(${idx+1})`).append(collapseDiv)
            document.querySelector(`.accordion-item:nth-child(${idx+1}) .accordion-collapse.collapse`).append(accBodyDiv)

            document.querySelector(`#heading${idx+1} > button`).addEventListener('click', () => {
                if (document.querySelector(`.accordion-item:nth-child(${idx+1}) .show`) == null) {
                    document.querySelector(`#collapse${idx+1} .accordion-body`).innerHTML = ''
                }

                const respAry = data[idx].responsibilities
                respAry.forEach((el, index) => {
                    const listItem = document.createElement('li')
                    document.querySelector(`#collapse${idx+1} .accordion-body`).append(listItem)
                    document.querySelector(`#collapse${idx+1} li:nth-child(${index+1})`).innerText = el.resposibility
                })
            })
        })
    })
}

if (window.location.href.match(/\/stack$/)) {
    const btnAttrs = {
        'type': 'button',
        'data-bs-toggle': 'collapse',
        'data-bs-target': '#collapse',
        'aria-expanded': 'false',
        'aria-controls': 'collapse'
    }
    const colapseDivAttrs = {
        'id': 'collapse',
        'aria-labelledby': 'heading',
        'data-bs-parent': '#employers'
    }

    fetchStack().then((data) => {
        data.forEach((el, idx) => {
            const accDiv = document.createElement('div'), collapseDiv = document.createElement('div'), accBodyDiv = document.createElement('div')
            const accHeader = document.createElement('h2')
            const accBtn = document.createElement('button')
    
            accDiv.classList.add('accordion-item')
            accHeader.classList.add('accordion-header')
            accBtn.classList.add('accordion-button','collapsed')
            collapseDiv.classList.add('accordion-collapse','collapse')
            accBodyDiv.classList.add('accordion-body')

            Object.keys(btnAttrs).forEach((key, keyIndex) => {
                keyIndex == 2 || keyIndex == 4
                ? accBtn.setAttribute(key, `${btnAttrs[key]}${idx+1}`)
                : accBtn.setAttribute(key, btnAttrs[key])
            })
            Object.keys(colapseDivAttrs).forEach((key, keyIndex) => {
                keyIndex < 2
                ? collapseDiv.setAttribute(key, `${colapseDivAttrs[key]}${idx+1}`)
                : collapseDiv.setAttribute(key, colapseDivAttrs[key])
            })
            accHeader.setAttribute('id', `heading${idx+1}`)
            
            document.querySelector('main #stack').append(accDiv)
            document.querySelector(`.accordion-item:nth-of-type(${idx+1})`).append(accHeader)
            document.querySelector(`.accordion-item:nth-child(${idx+1}) .accordion-header`).append(accBtn)
            document.querySelector(`.accordion-item:nth-child(${idx+1}) button`).innerText = el.name
            document.querySelector(`.accordion-item:nth-of-type(${idx+1})`).append(collapseDiv)
            document.querySelector(`.accordion-item:nth-child(${idx+1}) .accordion-collapse.collapse`).append(accBodyDiv)

            document.querySelector(`#heading${idx+1} > button`).addEventListener('click', () => {
                if (document.querySelector(`.accordion-item:nth-child(${idx+1}) .show`) == null) {
                    document.querySelector(`#collapse${idx+1} .accordion-body`).innerHTML = ''
                }

                const listAry = data[idx].list
                listAry.forEach((item, itemIndex) => {
                    const subAccDiv = document.createElement('div'), subCollapseDiv = document.createElement('div'), subAccBodyDiv = document.createElement('div')
                    const subAccHeader = document.createElement('h2')
                    const subAccBtn = document.createElement('button')

                    subAccDiv.classList.add('accordion-item')
                    subAccHeader.classList.add('accordion-header')
                    subAccBtn.classList.add('accordion-button','collapsed')
                    subCollapseDiv.classList.add('accordion-collapse','collapse')
                    subAccBodyDiv.classList.add('accordion-body')

                    Object.keys(btnAttrs).forEach((key, keyIndex) => {
                        keyIndex == 2 || keyIndex == 4
                        ? subAccBtn.setAttribute(key, `${btnAttrs[key]}-main${idx+1}-sub${itemIndex+1}`)
                        : subAccBtn.setAttribute(key, btnAttrs[key])
                    })
                    Object.keys(colapseDivAttrs).forEach((key, keyIndex) => {
                        keyIndex < 2
                        ? subCollapseDiv.setAttribute(key, `${colapseDivAttrs[key]}-main${idx+1}-sub${itemIndex+1}`)
                        : subCollapseDiv.setAttribute(key, colapseDivAttrs[key])
                    })
                    subAccHeader.setAttribute('id', `heading-main${idx+1}-sub${itemIndex+1}`)

                    document.querySelector(`#collapse${idx+1} .accordion-body`).append(subAccDiv)
                    document.querySelector(`#collapse${idx+1} .accordion-item:nth-of-type(${itemIndex+1})`).append(subAccHeader)
                    document.querySelector(`#collapse${idx+1} .accordion-item:nth-child(${itemIndex+1}) .accordion-header`).append(subAccBtn)
                    document.querySelector(`#collapse${idx+1} .accordion-item:nth-child(${itemIndex+1}) button`).innerText = item.name
                    document.querySelector(`#collapse${idx+1} .accordion-item:nth-of-type(${itemIndex+1})`).append(subCollapseDiv)
                    document.querySelector(`#collapse${idx+1} .accordion-item:nth-child(${itemIndex+1}) .accordion-collapse.collapse`).append(subAccBodyDiv)
                    
                    document.querySelector(`#collapse${idx+1} .accordion-item:nth-child(${itemIndex+1}) button`).addEventListener('click', () => {
                        if (document.querySelector(`#collapse${idx+1} .accordion-item:nth-child(${itemIndex+1}) .show`) == null) {
                            document.querySelector(`#collapse${idx+1} .accordion-item:nth-child(${itemIndex+1}) .accordion-body`).innerHTML = ''
                        }

                        listAry[itemIndex].list.forEach((tech, techIndex) => {
                            const listItem = document.createElement('li')
                            document.querySelector(`#collapse${idx+1} > .accordion-body .accordion-item:nth-child(${itemIndex+1}) .accordion-body`).append(listItem)
                            document.querySelector(`#collapse${idx+1} > .accordion-body .accordion-item:nth-child(${itemIndex+1}) .accordion-body li:nth-child(${techIndex+1})`).innerText = tech
                        })
                    })
                })
            })
        })
    })
}

if (window.location.href.match(/\/contact$/)) {
    fetchContact().then((data) => {
        Object.keys(data[0]).forEach((el, idx) => {
            const createP = document.createElement('p')
            document.querySelector('main').append(createP)
            document.querySelector(`main p:nth-of-type(${idx+1})`).innerText = `${el.toUpperCase()}\n${data[0][el]}`
        })
    })
}
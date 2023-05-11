// Create the Dog class here

export class Dog {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogHtml() {
        const {name, avatar, age, bio } = this
        return `<div class = "profile-box">
                    <img src = ${avatar} class = "profile-image"></img>
                    <div class = "profile-info">
                        <div>${name}, ${age} </div>
                        <div>${bio}</div>
                    </div>
                </div>`
    }
}



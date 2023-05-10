// Create the Dog class here
export class Dog {
    constructor(data) {
        Object.assign(this, data)

    }
    getDogHtml() {
        const {name, avatar, age, bio } = this
        return  `
            <div class="dog-info">
                <img id="dog-img" src="${avatar}" alt="dog">
                <p id='fixed-info'> ${name}, ${age}
                    <span>${bio}</span>
                </p>
            </div>
        `
    }

    setMatchObjects(bool) {
        const {hasBeenLiked, hasBeenSwiped } = this
        hasBeenLiked = bool
        hasBeenSwiped = true
    }
}


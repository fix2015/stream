class RecorderController {
    constructor(){
        alert('ok')
    }
}

const RecorderComponent = {
    bindings: {
        'name': '<'
    },
    template: `
       <div class="my-component">RecorderComponent</div>
    `,
    controller: RecorderController
}

export default RecorderComponent;
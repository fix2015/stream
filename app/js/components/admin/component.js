class AdminController {
    constructor(){

    }
}

const AdminComponent = {
    bindings: {
        'name': '<'
    },
    template: `
       <div class="my-component">AdminController</div>
    `,
    controller: AdminController
}

export default AdminComponent;
class AdminController {
  constructor (CountStore) {
    this.CountStore = CountStore;
    this.init();
  }

  init () {
    this.name = 'TWO';
    this.CountStore.increment();
  }
}

AdminController.$inject = ['CountStore'];

export default AdminController;

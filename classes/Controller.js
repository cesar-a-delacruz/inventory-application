module.exports = class Controller {
  #model = null;
  #viewFolder = null;
  constructor(model, viewFolder) {
    this.#model = model;
    this.#viewFolder = viewFolder;

    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.new = this.new.bind(this);
    this.edit = this.edit.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async index(req, res) {
    const items = await this.#model.findAll();
    res.render(`${this.#viewFolder}/index`, { title: this.#viewFolder, items });
  }
  async show(req, res) {
    const item = await this.#model.find(req.params.id);
    res.render(`${this.#viewFolder}/show`, { title: this.#viewFolder, item });
  }
  async new(req, res) {
    res.render(`${this.#viewFolder}/new`, { title: this.#viewFolder });
  }
  async edit(req, res) {
    res.send(req.originalUrl);
  }
  async create(req, res) {
    const result = await this.#model.insert(req.body);
    res.redirect(`/${this.#viewFolder}`);
  }
  async update(req, res) {
    res.send(req.originalUrl);
  }
  async delete(req, res) {
    res.send(req.originalUrl);
  }
};

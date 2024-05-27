export abstract class Base {
  constructor(protected _id: string, protected _createdAt: Date) {}

  public toJson() {
    // a lógica de execução vai ficar nas subclasses.
  }
}
